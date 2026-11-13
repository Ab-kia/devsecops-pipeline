DEMO CHANGES (do each on a branch; use INVENTED values only)

1. Failing test (Task 2.5): in test/app.test.js change toBe(2) to toBe(3). Push -> red. Revert -> green.

2. Fake secret (Task 3.3): create src/config.js with an invented key in a realistic format, e.g.
     module.exports = { awsKey: 'AKIA' + 'IOSFODNN7EXAMPLE' };  (write it as ONE literal string when testing)
   gitleaks fails the run (or push protection blocks the push). Screenshot/paste it. Then delete the file.

3. Vulnerable dependency (Task 4A): npm install minimist@1.2.0 --save-exact
   Push -> 'npm audit --audit-level=critical' fails.
   Fix: npm install minimist@latest, run npm test, push -> green.

4. SAST finding (Task 4B): add to src/app.js (npm i better-sqlite3; const db = new (require('better-sqlite3'))(':memory:');)
     app.get('/api/search', (req, res) => {
       const rows = db.prepare("SELECT * FROM items WHERE name = '" + req.query.q + "'").all();
       res.json(rows);
     });
   Fix: db.prepare('SELECT * FROM items WHERE name = ?').all(req.query.q)

5. Branch protection (Task 5): Settings > Branches (or Rules > Rulesets) > main:
   Require a pull request; Require status checks (Test and build, Secret scan (gitleaks),
   Dependency scan (npm audit), Analyze (javascript)); Require branch up to date; no bypass.
   Free private repos may lack this: make the repo public and say so in your answers.
