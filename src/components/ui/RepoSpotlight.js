/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import React from 'react';

/**
 * RepoSpotlight - cinematic repo card: title, description, stats.
 * Keep visuals SVG-ready and simple for remotion rendering.
 */

const RepoSpotlight = ({ repo = {}, index = 0 }) => {
  return (
    <div className="cine-card" style={{ padding: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 800 }}>{repo.name}</div>
          <div style={{ opacity: 0.75, marginTop: 8 }}>{repo.description ?? 'No description available.'}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontWeight: 800, fontSize: 18 }}>{repo.stars ?? 0} ⭐</div>
          <div style={{ opacity: 0.8, fontSize: 13 }}>{repo.lang ?? '—'}</div>
        </div>
      </div>
    </div>
  );
};

export default RepoSpotlight;