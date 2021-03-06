module.exports = {
  apps: [
    {
      name: 'ModernFarm',
      script: './server/index.js',
      instances: process.env.WEB_CONCURRENCY || 1,
      exec_mode: 'cluster',
      max_memory_restart: '512M',
      autorestart: true,
      watch: false,
      ignore_watch: ['node_modules', 'log'],
      env: {
        NODE_ENV: 'development',
        DEV: 'modern:farm',
      },
      env_production: {
        NODE_ENV: 'production',
        DEV: 'modern:farm',
      },
    },
  ],
};
