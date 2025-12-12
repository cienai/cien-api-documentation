import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  return (
    <Layout title="Cien API">
      <main className="hero" style={{ padding: '4rem 2rem', textAlign: 'center', position: 'relative' }}>
        <h1>Cien API</h1>
        <p style={{ maxWidth: 900, margin: '0 auto 1.5rem' }}>
          The Cien API allows developers to access the underlying data from Cien’s TrueAI platform,
          built to enable sales and marketing technology applications and analytics in completely new ways.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link className="button button--primary margin--sm" to={useBaseUrl('docs/intro')}>
            Get started
          </Link>

          <Link className="button button--secondary margin--sm" to={useBaseUrl('docs/examples')}>
            Examples
          </Link>

          <Link className="button button--secondary margin--sm" to={useBaseUrl('docs/queries')}>
            Queries
          </Link>

          <Link className="button button--secondary margin--sm" to={useBaseUrl('docs/entities/contacts/')}>
            Entities
          </Link>

          <Link className="button button--secondary margin--sm" to={useBaseUrl('docs/rules')}>
            Rules
          </Link>
        </div>

        {/* Banner above footer */}
        <div style={{ marginTop: '3rem' }}>
          <img
            src={useBaseUrl('/img/cien_banner.png')}
            alt="Cien banner"
            style={{ maxWidth: 1200, width: '100%', height: 'auto' }}
          />
        </div>
      </main>
    </Layout>
  );
}