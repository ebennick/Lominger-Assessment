document.getElementById('generate-report').addEventListener('click', function() {
      const form = document.getElementById('evaluation-form');
      const formData = new FormData(form);
      const reportData = {};
      for (let [key, value] of formData.entries()) {
        reportData[key] = value;
      }
      const reportHTML = generateReport(reportData);
      document.getElementById('report-container').innerHTML = reportHTML;
    });

    function generateReport(data) {
      const competencies = [
        { id: 'business-insight', label: 'Business Insight (5)' },
        { id: 'customer-focus', label: 'Customer Focus (11)' },
        { id: 'financial-acumen', label: 'Financial Acumen (17)' },
        { id: 'tech-savvy', label: 'Tech Savvy (35)' },
        { id: 'manages-complexity', label: 'Manages Complexity (8)' },
        { id: 'decision-quality', label: 'Decision Quality (12)' },
        { id: 'balances-stakeholders', label: 'Balances Stakeholders (32)' },
        { id: 'global-perspective', label: 'Global Perspective (18)' },
        { id: 'cultivates-innovation', label: 'Cultivates Innovation (19)' },
        { id: 'strategic-mindset', label: 'Strategic Mindset (33)' },
        { id: 'action-oriented', label: 'Action Oriented (2)' },
        { id: 'resourcefulness', label: 'Resourcefulness (27)' },
        { id: 'directs-work', label: 'Directs Work (15)' },
        { id: 'plans-aligns', label: 'Plans & Aligns (25)' },
        { id: 'optimizes-work-processes', label: 'Optimizes Work Processes (38)' },
        { id: 'ensures-accountability', label: 'Ensures Accountability (1)' },
        { id: 'drives-results', label: 'Drives Results (28)' },
        { id: 'collaborates', label: 'Collaborates (6)' },
        { id: 'manages-conflict', label: 'Manages Conflict (9)' },
        { id: 'interpersonal-savvy', label: 'Interpersonal Savvy (20)' },
        { id: 'builds-networks', label: 'Builds Networks (21)' },
        { id: 'attracts-top-talent', label: 'Attracts Top Talent (4)' },
        { id: 'develops-talent', label: 'Develops Talent (13)' },
        { id: 'values-differences', label: 'Values Differences (14)' },
        { id: 'builds-effective-teams', label: 'Builds Effective Teams (34)' },
        { id: 'communicates-effectively', label: 'Communicates Effectively (7)' },
        { id: 'drives-engagement', label: 'Drives Engagement (16)' },
        { id: 'organizational-savvy', label: 'Organizational Savvy (23)' },
        { id: 'persuades', label: 'Persuades (24)' },
        { id: 'drives-vision-purpose', label: 'Drives Vision and Purpose (37)' },
        { id: 'courage', label: 'Courage (10)' },
        { id: 'instills-trust', label: 'Instills Trust (36)' },
        { id: 'demonstrates-self-awareness', label: 'Demonstrates Self-Awareness (29)' },
        { id: 'self-development', label: 'Self-Development (30)' },
        { id: 'manages-ambiguity', label: 'Manages Ambiguity (3)' },
        { id: 'nimble-learning', label: 'Nimble Learning (22)' },
        { id: 'being-resilient', label: 'Being Resilient (26)' },
        { id: 'situational-adaptability', label: 'Situational Adaptability (31)' }
      ];

      let tableHTML = '<table class="report-table"><thead><tr><th>Competency</th><th>Rating</th></tr></thead><tbody>';
      competencies.forEach(competency => {
        tableHTML += `<tr><td>${competency.label}</td><td>${data[competency.id]}</td></tr>`;
      });
      tableHTML += '</tbody></table>';
      return tableHTML;
    }
