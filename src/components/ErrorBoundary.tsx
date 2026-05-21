import { Component, ErrorInfo, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  /** Changes whenever the route changes — resets the boundary state. */
  resetKey?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

const RELOAD_KEY = "cosmedocs:chunk-reload-attempted";

function isChunkLoadError(error: unknown): boolean {
  const message = String((error as any)?.message || error || "");
  return /Loading chunk|Loading CSS chunk|dynamically imported module|Importing a module script failed|ChunkLoadError/i.test(
    message
  );
}

class ErrorBoundaryInner extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // Stale-deploy chunk failure — silently reload once to fetch the new bundle.
    if (isChunkLoadError(error) && typeof window !== 'undefined') {
      let alreadyTried = false;
      try { alreadyTried = window.sessionStorage.getItem(RELOAD_KEY) === '1'; } catch {}
      if (!alreadyTried) {
        try { window.sessionStorage.setItem(RELOAD_KEY, '1'); } catch {}
        window.location.reload();
      }
    }
  }

  componentDidUpdate(prevProps: Props) {
    // Reset the error state when the user navigates to a new route, so
    // a single broken page never blocks the rest of the app.
    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
      this.setState({ hasError: false, error: undefined });
    }
  }

  render() {
    if (this.state.hasError) {
      // For chunk errors we're already reloading — keep the screen blank
      // rather than flashing the scary fallback.
      if (isChunkLoadError(this.state.error)) {
        return null;
      }

      return this.props.fallback || (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
          <div className="text-center max-w-md">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <p className="text-gray-400 mb-6">
              We're sorry, but something unexpected happened. Please refresh the page or contact us directly.
            </p>
            <div className="space-y-4">
              <a
                href="tel:+443330551503"
                className="block bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Call: 0333 0551 503
              </a>
              <button
                onClick={() => window.location.reload()}
                className="block w-full border border-white/20 px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Wrapper that subscribes to route changes and feeds them in as a resetKey,
// so a stale error from one page can't persist after the user navigates.
export function ErrorBoundary({ children, fallback }: Omit<Props, 'resetKey'>) {
  const location = useLocation();
  return (
    <ErrorBoundaryInner resetKey={location.pathname} fallback={fallback}>
      {children}
    </ErrorBoundaryInner>
  );
}

export default ErrorBoundary;
