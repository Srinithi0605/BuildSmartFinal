const { useMemo, useState } = React;

const pages = {
  approval_flow: { title: 'Approval Flow', eyebrow: 'Workflow Module', cta: 'New Submission', accent: '#2979FF' },
  document_management: { title: 'Document Management', eyebrow: 'Document Hub', cta: 'Upload Document', accent: '#39FF82' },
  stakeholder_collab: { title: 'Stakeholder Collab', eyebrow: 'Collaboration', cta: 'Invite Member', accent: '#BF5FFF' },
  submission_validation: { title: 'Submission Validation', eyebrow: 'Quality Control', cta: 'Run Validation', accent: '#FF6B1A' },
  project_insights: { title: 'Project Insights', eyebrow: 'Analytics', cta: 'Export Report', accent: '#FFD600' },
};

const featureIdeas = [
  'Role-based workspaces with approval authority matrices.',
  'AI document checker for missing stamps/signatures before final submission.',
  'Conflict heatmap to detect drawing/version mismatches across disciplines.',
  'Auto-generated weekly compliance digest sent to all stakeholders.',
  'One-click submission readiness report with blocker recommendations.',
];

const teamStreams = [
  { member: 'Member 1', branch: 'feature/approval-ai-engine', scope: 'Approval state machine, risk predictor, auto-escalation, dashboard.' },
  { member: 'Member 2', branch: 'feature/auth-user-management', scope: 'JWT auth, RBAC, registration/login, profile settings.' },
  { member: 'Member 3', branch: 'feature/document-version-vault', scope: 'Upload vault, revisions, comparisons, document timeline.' },
  { member: 'Member 4', branch: 'feature/readiness-compliance-tracker', scope: 'Checklist, readiness score, compliance gaps, missing docs.' },
  { member: 'Member 5', branch: 'feature/public-project-timeline-feed', scope: 'Public milestone feed, progress visualization, shareable status page.' },
];

function App() {
  const [activePage, setActivePage] = useState('approval_flow');
  const meta = useMemo(() => pages[activePage], [activePage]);

  return (
    <div className="app" style={{ '--accent': meta.accent }}>
      <aside className="sidebar">
        <h2>BuildSmart</h2>
        {Object.entries(pages).map(([key, page]) => (
          <button key={key} className={activePage === key ? 'active' : ''} onClick={() => setActivePage(key)}>
            {page.title}
          </button>
        ))}
      </aside>

      <main className="main">
        <header className="hero">
          <p>{meta.eyebrow}</p>
          <h1>{meta.title}</h1>
          <button>{meta.cta}</button>
        </header>

        <section className="problem-card">
          <h3>Problem Statement</h3>
          <p>
            Construction approval portals often process only final submissions, while the pre-submission coordination between
            architects, engineers, and contractors remains unstructured. This causes document version conflicts, missed compliance
            requirements, repeated rejection cycles, project delays, and avoidable cost overruns.
          </p>
        </section>

        <section className="grid">
          <article>
            <h3>Core Product Modules</h3>
            <ul>
              <li>User Role Management</li>
              <li>Document Repository + Version Control</li>
              <li>Internal Approval Workflow</li>
              <li>Submission Readiness Checklist</li>
              <li>Approval Status Tracker</li>
              <li>Stakeholder Notifications</li>
              <li>Compliance Reminder System</li>
              <li>Project Activity Log</li>
            </ul>
          </article>

          <article>
            <h3>Feature Ideas</h3>
            <ul>
              {featureIdeas.map((idea) => (
                <li key={idea}>{idea}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="team">
          <h3>Implementation Streams</h3>
          <div className="team-grid">
            {teamStreams.map((stream) => (
              <div className="member-card" key={stream.branch}>
                <h4>{stream.member}</h4>
                <code>{stream.branch}</code>
                <p>{stream.scope}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
