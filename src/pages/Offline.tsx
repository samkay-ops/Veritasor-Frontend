import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Offline() {
  useEffect(() => {
    document.title = 'You are offline - Veritasor'
  }, [])

  function handleRetry() {
    window.location.reload()
  }

  return (
    <section className="not-found-page" aria-labelledby="offline-title">
      <div className="not-found-card">
        {/* Illustration */}
        <div aria-hidden="true" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
          <svg
            width="160"
            height="120"
            viewBox="0 0 160 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="80" cy="48" r="28" stroke="currentColor" strokeWidth="2" opacity="0.3" />
            <path
              d="M62 48c0-10 8-18 18-18s18 8 18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
            />
            <path
              d="M68 70l12 12 12-12"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M40 95h80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.25" />
          </svg>
        </div>

        <p className="not-found-eyebrow">Network offline</p>
        <div className="not-found-header">
          <h1 id="offline-title">You appear to be offline</h1>
          <p>
            We can’t reach the server right now. Check your internet connection and try again.
          </p>
        </div>

        <div className="not-found-actions" aria-label="Recovery actions">
          <button
            type="button"
            className="not-found-button not-found-button-primary"
            onClick={handleRetry}
          >
            Try again
          </button>
          <a
            className="not-found-button not-found-button-secondary"
            href="https://status.veritasor.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            View status page
          </a>
        </div>

        <div className="not-found-support" aria-label="Additional support links">
          <Link className="not-found-support-link" to="/">
            <span>Back to dashboard</span>
            <small>Return once your connection is restored.</small>
          </Link>
        </div>
      </div>
    </section>
  )
}
