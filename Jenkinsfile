pipeline {
  agent {
    docker {
      image 'node:20-alpine'
      args  '-u root'
    }
  }

  environment {
    NETLIFY_AUTH_TOKEN = credentials('NETLIFY_AUTH_TOKEN')
    NETLIFY_SITE_ID    = credentials('NETLIFY_SITE_ID')
    NODE_ENV           = 'production'
  }

  options {
    buildDiscarder(logRotator(numToKeepStr: '10'))
    timeout(time: 20, unit: 'MINUTES')
    timestamps()
  }

  stages {

    stage('📦 Install') {
      steps {
        echo '--- Installing dependencies ---'
        sh 'npm ci --prefer-offline'
      }
    }

    stage('🔍 Lint') {
      steps {
        echo '--- Running ESLint ---'
        sh 'npm run lint'
      }
    }

    stage('🔎 Type Check') {
      steps {
        echo '--- Running TypeScript compiler check ---'
        sh 'npx tsc --noEmit'
      }
    }

    stage('🏗️ Build') {
      steps {
        echo '--- Building Next.js static export ---'
        sh 'npm run build'
      }
      post {
        success {
          archiveArtifacts artifacts: 'out/**', fingerprint: true
        }
      }
    }

    stage('🚀 Deploy to Netlify') {
      when {
        branch 'main'
      }
      steps {
        echo '--- Deploying to Netlify ---'
        sh '''
          npm install -g netlify-cli --silent
          netlify deploy \
            --auth  $NETLIFY_AUTH_TOKEN \
            --site  $NETLIFY_SITE_ID   \
            --dir   out                \
            --prod
        '''
      }
    }

  }

  post {
    success {
      echo "✅ Pipeline succeeded — Saffron & Stone deployed!"
    }
    failure {
      echo "❌ Pipeline failed — check logs above."
    }
    always {
      cleanWs()
    }
  }
}
