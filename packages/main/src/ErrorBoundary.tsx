import React from 'react';
import { Button, FatalError } from '@gaius/ui';

type ErrorBoundaryState = {
  error: Error | undefined;
};

export class ErrorBoundary extends React.Component<any, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    error: undefined,
  };

  componentDidCatch(error: Error) {
    this.setState({ error });
  }

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;

    return(
      <FatalError>
        {error.message}
        <pre>
          {error.stack}
        </pre>
        <Button onClick={() => window.location.reload()}>Reload</Button>
      </FatalError>
    );
  }
}
