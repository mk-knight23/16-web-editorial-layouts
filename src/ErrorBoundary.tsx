import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8" role="alert" aria-live="assertive">
                    <div className="max-w-2xl w-full bg-white border-2 border-black p-12 shadow-2xl">
                        <h1 className="text-6xl font-black uppercase tracking-tighter font-serif mb-6">Design <br/> <span className="text-accent italic">Interrupted.</span></h1>
                        <p className="text-slate-600 font-serif text-lg mb-8 leading-relaxed">
                            Something unexpected occurred while rendering the editorial layout. We apologize for the disruption.
                        </p>
                        {this.state.error && (
                            <details className="mb-8">
                                <summary className="text-xs font-black uppercase tracking-widest cursor-pointer hover:text-accent transition-colors">
                                    Technical Details
                                </summary>
                                <pre className="mt-4 p-4 bg-slate-50 text-xs overflow-auto font-mono">
                                    {this.state.error.toString()}
                                </pre>
                            </details>
                        )}
                        <button
                            onClick={() => window.location.reload()}
                            className="px-10 py-5 bg-black text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-accent transition-colors"
                        >
                            Refresh The Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
