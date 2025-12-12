import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  return (
    <Layout title="Cien API">
      <main style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <img
          src={useBaseUrl('img/api.png')}
          alt="Cien API"
          style={{ maxWidth: 640, width: '100%', height: 'auto', marginBottom: '1.5rem' }}
        />

        <h1>Cien API</h1>
        <p>
          Official documentation for accessing and integrating with
          Cien’s customer intelligence platform.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link className="button button--primary margin--sm" to={useBaseUrl('docs/intro')}>
            Get started
          </Link>

          <Link className="button button--secondary margin--sm" to={useBaseUrl('docs/examples')}>
            Examples
          </Link>

          <Link className="button button--secondary margin--sm" to={useBaseUrl('docs/rules')}>
            Rules
          </Link>
          <Link className="button button--secondary margin--sm" to={useBaseUrl('docs/queries')}>
            Queries
          </Link>
        </div>
      </main>
    </Layout>
  );
}