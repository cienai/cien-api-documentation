import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="Cien API">
      <main style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <img
          src="/cien-api-documentation/img/api-hero.png"
          alt="Cien API"
          style={{ maxWidth: 220 }}
        />

        <h1>Cien API</h1>
        <p>
          Official documentation for accessing and integrating with
          Cien’s customer intelligence platform.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link className="button button--primary margin--sm" to="/docs/intro">
            Get started
          </Link>

          <Link className="button button--secondary margin--sm" to="/docs/examples">
            Examples
          </Link>

          <Link className="button button--secondary margin--sm" to="/docs/api-reference">
            API Reference
          </Link>
        </div>
      </main>
    </Layout>
  );
}