module.exports = [
  {
    name: 'app',
    script: 'yarn',
    args: 'start',
    interpreter: '/bin/bash',
    env: {
      NODE_ENV: 'production'
    },
    exec_mode: 'cluster',
    instances: 'max',
  },
]
