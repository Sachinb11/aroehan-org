import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-brand-50 border-2 border-brand-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <span className="font-display font-bold text-2xl text-brand-500">404</span>
        </div>
        <h1 className="font-display text-3xl text-gray-900 mb-4">Page not found</h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">Back to Home</Link>
      </div>
    </div>
  );
}
