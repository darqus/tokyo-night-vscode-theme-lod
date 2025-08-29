#!/usr/bin/env node

/**
 * Build performance monitoring tool
 * Tracks build times and resource usage
 */

import * as fs from 'fs'
import * as path from 'path'

interface BuildMetrics {
  timestamp: string
  buildTimeMs: number
  memoryUsedBytes: number
  memoryUsedMB: string
}

class BuildPerformanceMonitor {
  private startTime: bigint | null = null
  private startMemory: NodeJS.MemoryUsage | null = null
  private metrics: BuildMetrics[] = []

  start(): void {
    this.startTime = process.hrtime.bigint()
    this.startMemory = process.memoryUsage()
    console.log('⏱️  Starting build performance monitoring...')
  }

  end(): BuildMetrics | undefined {
    if (!this.startTime || !this.startMemory) {
      console.warn('Build performance monitoring was not started')
      return
    }

    const endTime = process.hrtime.bigint()
    const endMemory = process.memoryUsage()

    const buildTime = Number(endTime - this.startTime) / 1_000_000 // Convert to milliseconds
    const memoryUsed = endMemory.heapUsed - this.startMemory.heapUsed

    const metrics: BuildMetrics = {
      timestamp: new Date().toISOString(),
      buildTimeMs: buildTime,
      memoryUsedBytes: memoryUsed,
      memoryUsedMB: (memoryUsed / 1024 / 1024).toFixed(2),
    }

    this.metrics.push(metrics)

    console.log(`\n📊 Build Performance Metrics:`)
    console.log(`   Build Time: ${buildTime.toFixed(2)}ms`)
    console.log(`   Memory Used: ${metrics.memoryUsedMB}MB`)

    // Save metrics to file
    this.saveMetrics(metrics)

    return metrics
  }

  private saveMetrics(metrics: BuildMetrics): void {
    const metricsFile = path.join(process.cwd(), 'build-metrics.json')
    let existingMetrics: BuildMetrics[] = []

    // Load existing metrics if file exists
    if (fs.existsSync(metricsFile)) {
      try {
        const content = fs.readFileSync(metricsFile, 'utf8')
        existingMetrics = JSON.parse(content)
      } catch (error: any) {
        console.warn('Could not read existing metrics file:', error.message)
      }
    }

    // Add new metrics
    existingMetrics.push(metrics)

    // Keep only last 50 metrics
    if (existingMetrics.length > 50) {
      existingMetrics = existingMetrics.slice(-50)
    }

    // Save metrics
    try {
      fs.writeFileSync(metricsFile, JSON.stringify(existingMetrics, null, 2))
      console.log(`   Metrics saved to ${metricsFile}`)
    } catch (error: any) {
      console.warn('Could not save metrics file:', error.message)
    }
  }

  getAverageMetrics(): {
    averageBuildTimeMs: number
    averageMemoryUsedMB: string
  } | null {
    const metricsFile = path.join(process.cwd(), 'build-metrics.json')

    if (!fs.existsSync(metricsFile)) {
      return null
    }

    try {
      const content = fs.readFileSync(metricsFile, 'utf8')
      const metrics: BuildMetrics[] = JSON.parse(content)

      if (metrics.length === 0) {
        return null
      }

      const avgBuildTime =
        metrics.reduce((sum, m) => sum + m.buildTimeMs, 0) / metrics.length
      const avgMemory =
        metrics.reduce((sum, m) => sum + m.memoryUsedBytes, 0) / metrics.length

      return {
        averageBuildTimeMs: avgBuildTime,
        averageMemoryUsedMB: (avgMemory / 1024 / 1024).toFixed(2),
      }
    } catch (error: any) {
      console.warn('Could not read metrics file:', error.message)
      return null
    }
  }
}

export { BuildPerformanceMonitor }
