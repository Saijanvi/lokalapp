export default function Error({ message, onRetry }) {
    return (
      <div className="error">
        <p>⚠️ {message}</p>
        {onRetry && (
          <button onClick={onRetry} className="retry-btn">
            Try Again
          </button>
        )}
      </div>
    );
  }