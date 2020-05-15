module.exports = {
  apps: [
    {
      name: 'Jobjoo',
      script: './server/index.js',
      args: 'one two',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
