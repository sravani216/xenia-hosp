/**
 * XENIA Physio & Rehab Center
 * Clean, Beginner-Friendly Vanilla JavaScript
 * Features:
 * - Direct Module Navigation & Active Selection (No submodules)
 * - Module 1: Patient Registration & Records Directory
 * - Dynamic Companion Views for Modules 2 to 8
 * - Live Module Search in Sidebar
 * - Patient Directory: Dynamic list, View Patient popup, New Patient Registration form
 */

// =========================================================================
// 1. PATIENT DIRECTORY DUMMY DATA
// =========================================================================
let patientsData = [
  {
    id: 'XEN-2026-0142',
    name: 'Eleanor Vance',
    age: 46,
    gender: 'Female',
    date: '02 Nov 2026',
    department: 'Neuro Rehabilitation',
    diagnosis: 'Post-Stroke Hemiparesis (Right-Sided)',
    therapist: 'Dr. Sarah Jenkins, PT',
    phone: '+91 98451 22340',
    emergency: 'Arthur Vance (Spouse) - +91 98451 22341',
    status: 'In Active Rehab',
    painScore: '3 / 10',
    mobilityProgress: 68,
    sessionSchedule: 'Mon, Wed, Fri (10:00 AM)'
  },
  {
    id: 'XEN-2026-0158',
    name: 'Marcus Sterling',
    age: 32,
    gender: 'Male',
    date: '03 Nov 2026',
    department: 'Sports Physio & Conditioning',
    diagnosis: 'ACL Reconstruction & Meniscal Repair',
    therapist: 'Dr. David Miller, MPT',
    phone: '+91 98112 44520',
    emergency: 'Claire Sterling (Sister) - +91 98112 44521',
    status: 'Phase 2 Strength',
    painScore: '2 / 10',
    mobilityProgress: 82,
    sessionSchedule: 'Tue, Thu, Sat (04:00 PM)'
  },
  {
    id: 'XEN-2026-0174',
    name: 'Ananya Sharma',
    age: 58,
    gender: 'Female',
    date: '04 Nov 2026',
    department: 'Orthopedic & Joint Rehab',
    diagnosis: 'Bilateral Total Knee Arthroplasty (TKA)',
    therapist: 'Dr. Anita Roy, PT',
    phone: '+91 98765 88901',
    emergency: 'Rohan Sharma (Son) - +91 98765 88902',
    status: 'Gait Training & ROM',
    painScore: '4 / 10',
    mobilityProgress: 55,
    sessionSchedule: 'Daily Outpatient (11:30 AM)'
  },
  {
    id: 'XEN-2026-0189',
    name: 'Julian Bennett',
    age: 64,
    gender: 'Male',
    date: '05 Nov 2026',
    department: 'Cardiopulmonary Rehab',
    diagnosis: 'Post-CABG Cardiac Recovery & Breathing Therapy',
    therapist: 'Dr. Vikram Nair, MPT',
    phone: '+91 97401 55620',
    emergency: 'Grace Bennett (Wife) - +91 97401 55621',
    status: 'Cardio Endurance',
    painScore: '1 / 10',
    mobilityProgress: 74,
    sessionSchedule: 'Mon, Wed, Fri (09:00 AM)'
  },
  {
    id: 'XEN-2026-0205',
    name: 'Priya Nambiar',
    age: 27,
    gender: 'Female',
    date: '05 Nov 2026',
    department: 'Spine Care & Ergonomics',
    diagnosis: 'Lumbar Disc Herniation (L4-L5) with Sciatica',
    therapist: 'Dr. Sarah Jenkins, PT',
    phone: '+91 99002 77110',
    emergency: 'Kiran Nambiar (Brother) - +91 99002 77112',
    status: 'Core Decompression',
    painScore: '3 / 10',
    mobilityProgress: 60,
    sessionSchedule: 'Tue, Thu (02:00 PM)'
  }
];

// =========================================================================
// 2. CLINICAL MODULE DEFINITIONS FOR COMPANION VIEWS (MODULES 2 TO 8)
// =========================================================================
const moduleDefinitions = {
  'clinical-assessment': {
    badge: 'MODULE 02 • CLINICAL ASSESSMENT & TREATMENT PLANNING',
    title: 'Clinical Assessment & Treatment Planning',
    desc: 'Diagnostic evaluations, mobility & pain score assessments, tailored rehab protocols, and treatment timeline tracking.',
    stats: [
      { label: 'Active Assessments', val: '28 Evaluated' },
      { label: 'Reassessments Due', val: '14 This Week' },
      { label: 'Protocol Adherence', val: '96.4%' },
      { label: 'Target Goals Set', val: '142 Objectives' }
    ],
    items: [
      { name: 'Initial Mobility & Functional ROM Check', patient: 'Eleanor Vance (XEN-2026-0142)', status: 'Approved', therapist: 'Dr. Sarah Jenkins' },
      { name: 'Knee Flexion & Gait Analysis Protocol', patient: 'Ananya Sharma (XEN-2026-0174)', status: 'In Review', therapist: 'Dr. Anita Roy' },
      { name: 'Isometric Core & Lumbar Stability Test', patient: 'Priya Nambiar (XEN-2026-0205)', status: 'Scheduled', therapist: 'Dr. Sarah Jenkins' }
    ]
  },
  'therapist-allocation': {
    badge: 'MODULE 03 • THERAPIST ALLOCATION & SCHEDULING',
    title: 'Therapist Allocation & Scheduling',
    desc: 'Specialist roster planning, patient-therapist matching, daily treatment calendar, and workload optimization.',
    stats: [
      { label: 'Licensed Therapists', val: '24 On Duty' },
      { label: 'Today\'s Sessions', val: '68 Scheduled' },
      { label: 'Average Workload', val: '4.2 Hrs / Day' },
      { label: 'Schedule Conflicts', val: '0 Reported' }
    ],
    items: [
      { name: 'Dr. Sarah Jenkins, PT (Neuro Rehab)', patient: '3 Active Patients Assigned', status: 'Available at 11:30 AM', therapist: 'Lead Specialist' },
      { name: 'Dr. David Miller, MPT (Sports Physio)', patient: '4 Active Patients Assigned', status: 'In Session (Gym 2)', therapist: 'Sports Specialist' },
      { name: 'Dr. Anita Roy, PT (Orthopedics)', patient: '3 Active Patients Assigned', status: 'Available at 01:00 PM', therapist: 'Ortho Specialist' }
    ]
  },
  'live-treatment': {
    badge: 'MODULE 04 • LIVE TREATMENT & SESSION TRACKING',
    title: 'Live Treatment & Session Tracking',
    desc: 'Real-time patient check-ins, active rehabilitation session timer, live duration recording, and pause/complete states.',
    stats: [
      { label: 'Sessions Active Now', val: '8 In-Progress' },
      { label: 'Completed Today', val: '24 Sessions' },
      { label: 'Avg Session Duration', val: '45 Minutes' },
      { label: 'Live Check-ins', val: '100% Verified' }
    ],
    items: [
      { name: 'Gait Training & Dynamic Weight Bearing', patient: 'Eleanor Vance (Room 104)', status: '● In Progress (32m)', therapist: 'Dr. Sarah Jenkins' },
      { name: 'Post-Op Knee Isometric Strengthening', patient: 'Marcus Sterling (Gym Bay A)', status: '● In Progress (18m)', therapist: 'Dr. David Miller' },
      { name: 'Cardiopulmonary Graded Treadmill Walk', patient: 'Julian Bennett (Cardio Wing)', status: 'Paused (Hydration)', therapist: 'Dr. Vikram Nair' }
    ]
  },
  'treatment-progress': {
    badge: 'MODULE 05 • TREATMENT PROGRESS & GOAL MONITORING',
    title: 'Treatment Progress & Goal Monitoring',
    desc: 'Baseline comparative measurements, recovery milestones, pain trend indices, and mobility progress charts.',
    stats: [
      { label: 'Average Mobility Gain', val: '+42% Overall' },
      { label: 'Pain Score Reduction', val: '-65% Avg' },
      { label: 'Rehab Milestones Met', val: '58 Reached' },
      { label: 'Discharge Readiness', val: '12 Patients' }
    ],
    items: [
      { name: 'Upper Extremity Active Elevation: 110° Reached', patient: 'Eleanor Vance (XEN-2026-0142)', status: '68% of Target', therapist: 'Target: 140°' },
      { name: 'Quadriceps Peak Force: 82% Symmetry', patient: 'Marcus Sterling (XEN-2026-0158)', status: '82% of Target', therapist: 'Target: 95%' },
      { name: 'Independent Walking without Assistive Device', patient: 'Ananya Sharma (XEN-2026-0174)', status: '55% of Target', therapist: 'Target: 100%' }
    ]
  },
  'family-communication': {
    badge: 'MODULE 06 • FAMILY COMMUNICATION & NOTIFICATIONS',
    title: 'Family Communication & Notifications',
    desc: 'Real-time WhatsApp alerts, SMS status updates, session start notifications, and family access authorization.',
    stats: [
      { label: 'Alerts Sent Today', val: '184 Dispatched' },
      { label: 'WhatsApp Delivery', val: '99.8% Success' },
      { label: 'Registered Guardians', val: '92 Linked' },
      { label: 'Avg Delivery Speed', val: '1.2 Seconds' }
    ],
    items: [
      { name: 'Session Started: Gait Training session in Wing B', patient: 'Arthur Vance (+91 98451 22341)', status: '✓ Delivered (WhatsApp)', therapist: 'Today, 10:02 AM' },
      { name: 'Therapist Daily Summary & Home Exercises Sent', patient: 'Claire Sterling (+91 98112 44521)', status: '✓ Delivered (SMS)', therapist: 'Today, 09:15 AM' },
      { name: 'Consultation Scheduled for Tomorrow 11:30 AM', patient: 'Rohan Sharma (+91 98765 88902)', status: '✓ Delivered (Email)', therapist: 'Today, 08:30 AM' }
    ]
  },
  'therapist-reports': {
    badge: 'MODULE 07 • PATIENT CONDITION & THERAPIST REPORTS',
    title: 'Patient Condition & Therapist Reports',
    desc: 'Pre-treatment assessments, therapist observation notes, patient response recording, and approved discharge documentation.',
    stats: [
      { label: 'Reports Filed Today', val: '36 Documented' },
      { label: 'Awaiting Sign-off', val: '4 Pending' },
      { label: 'Approved & Signed', val: '32 Finalized' },
      { label: 'Compliance Audit', val: '100% Passed' }
    ],
    items: [
      { name: 'Bi-Weekly Neuro Recovery Assessment Report', patient: 'Eleanor Vance (XEN-2026-0142)', status: '✓ Approved & Signed', therapist: 'Dr. Sarah Jenkins' },
      { name: 'Post-Surgical Knee Arthroscopy Milestone Evaluation', patient: 'Marcus Sterling (XEN-2026-0158)', status: '✓ Approved & Signed', therapist: 'Dr. David Miller' },
      { name: 'Cardiopulmonary Exercise Tolerance Daily Log', patient: 'Julian Bennett (XEN-2026-0189)', status: 'In Review', therapist: 'Dr. Vikram Nair' }
    ]
  },
  'family-dashboard': {
    badge: 'MODULE 08 • FAMILY DASHBOARD & PATIENT MONITORING',
    title: 'Family Dashboard & Patient Monitoring',
    desc: 'Live caregiver view of patient treatment timeline, attending therapist contact, progress indicators, and support channels.',
    stats: [
      { label: 'Active Caregivers', val: '92 Portals' },
      { label: 'Live Treatment Views', val: '48 Today' },
      { label: 'Support Response', val: '< 3 Minutes' },
      { label: 'Family Rating', val: '4.95 / 5.0' }
    ],
    items: [
      { name: 'Eleanor Vance — Today\'s Status: Active In-Session', patient: 'Arthur Vance (Guardian)', status: 'Portal Active', therapist: 'Helpline: 1800-936-CARE' },
      { name: 'Marcus Sterling — Today\'s Status: Completed (04:45 PM)', patient: 'Claire Sterling (Guardian)', status: 'Portal Active', therapist: 'Helpline: 1800-936-CARE' },
      { name: 'Ananya Sharma — Today\'s Status: Next Session at 11:30 AM', patient: 'Rohan Sharma (Guardian)', status: 'Portal Active', therapist: 'Helpline: 1800-936-CARE' }
    ]
  }
};

// =========================================================================
// 3. GLOBAL MODULE SELECTION FUNCTION
// =========================================================================
function selectModule(moduleId) {
  // Update sidebar active styling
  const moduleItems = document.querySelectorAll('.module-item');
  moduleItems.forEach(function (item) {
    const isSelected = item.getAttribute('data-module') === moduleId;
    item.classList.toggle('active', isSelected);
    const btn = item.querySelector('.module-btn');
    if (btn) btn.setAttribute('aria-selected', isSelected ? 'true' : 'false');
  });

  // Toggle main content view
  const patientView = document.getElementById('view-patient-registration');
  const genericView = document.getElementById('view-module-content');

  if (moduleId === 'patient-registration') {
    if (patientView) patientView.style.display = 'block';
    if (genericView) genericView.style.display = 'none';
  } else {
    if (patientView) patientView.style.display = 'none';
    if (genericView) {
      genericView.style.display = 'block';
      renderModuleContent(moduleId);
    }
  }
}

// Make selectModule globally accessible for HTML onclick handlers
window.selectModule = selectModule;

// Populate companion module view dynamically
function renderModuleContent(moduleId) {
  const def = moduleDefinitions[moduleId];
  if (!def) return;

  const badgeEl = document.getElementById('module-view-badge');
  const titleEl = document.getElementById('module-view-title');
  const descEl = document.getElementById('module-view-desc');
  const statsGrid = document.getElementById('module-stats-grid');
  const recordsBody = document.getElementById('module-records-body');

  if (badgeEl) badgeEl.textContent = def.badge;
  if (titleEl) titleEl.textContent = def.title;
  if (descEl) descEl.textContent = def.desc;

  if (statsGrid && def.stats) {
    let statsHtml = '';
    def.stats.forEach(function (stat) {
      statsHtml += `
        <div class="module-stat-card">
          <span class="module-stat-label">${stat.label}</span>
          <span class="module-stat-val">${stat.val}</span>
        </div>
      `;
    });
    statsGrid.innerHTML = statsHtml;
  }

  if (recordsBody && def.items) {
    let itemsHtml = '';
    def.items.forEach(function (item) {
      itemsHtml += `
        <tr>
          <td>
            <div class="patient-cell-profile">
              <div class="patient-avatar" style="font-size: 0.72rem;">★</div>
              <div class="patient-main-info">
                <span class="patient-name">${item.name}</span>
                <span class="patient-demographics">${def.title}</span>
              </div>
            </div>
          </td>
          <td>
            <span class="id-chip">${item.patient}</span>
          </td>
          <td>
            <span class="status-chip">${item.status}</span>
          </td>
          <td>
            <span class="dept-pill">${item.therapist}</span>
          </td>
          <td style="text-align: right;">
            <button type="button" class="btn-view-patient" onclick="selectModule('patient-registration')">
              <span>View Directory</span>
            </button>
          </td>
        </tr>
      `;
    });
    recordsBody.innerHTML = itemsHtml;
  }
}

// =========================================================================
// 4. MAIN APPLICATION INITIALIZATION
// =========================================================================
document.addEventListener('DOMContentLoaded', function () {
  
  // Set default active module: Patient Registration & Family Linking
  selectModule('patient-registration');

  // =======================================================================
  // SEARCH BAR: FILTERS THE 8 MODULES DIRECTLY
  // =======================================================================
  const searchInput = document.getElementById('module-search-input');
  const clearBtn = document.getElementById('clear-search-btn');
  const searchFeedback = document.getElementById('search-feedback');
  const moduleItems = document.querySelectorAll('.module-item');

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const query = this.value.trim().toLowerCase();

      if (clearBtn) {
        clearBtn.style.display = query ? 'flex' : 'none';
      }

      if (!query) {
        moduleItems.forEach(function (item) {
          item.style.display = '';
        });

        if (searchFeedback) {
          searchFeedback.style.display = 'none';
          searchFeedback.textContent = '';
        }
        return;
      }

      let visibleCount = 0;

      moduleItems.forEach(function (item) {
        const moduleNameEl = item.querySelector('.module-name');
        const moduleName = moduleNameEl ? moduleNameEl.textContent.toLowerCase() : '';
        const matches = moduleName.includes(query);

        if (matches) {
          item.style.display = '';
          visibleCount++;
        } else {
          item.style.display = 'none';
        }
      });

      if (searchFeedback) {
        searchFeedback.style.display = 'block';
        if (visibleCount > 0) {
          searchFeedback.textContent = `Found ${visibleCount} matching module(s)`;
          searchFeedback.style.color = '#0284c7';
        } else {
          searchFeedback.textContent = 'No matching modules found';
          searchFeedback.style.color = '#e11d48';
        }
      }
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input'));
        searchInput.focus();
      });
    }
  }

  // =======================================================================
  // PATIENT DIRECTORY RENDERING & LOGIC
  // =======================================================================
  const patientTableBody = document.getElementById('patient-table-body');
  const patientCountBadge = document.getElementById('patient-count-badge');
  const patientSearchInput = document.getElementById('patient-search-input');

  // Modals
  const viewModal = document.getElementById('view-patient-modal');
  const newPatientModal = document.getElementById('new-patient-modal');
  const toastNotification = document.getElementById('toast-notification');

  function getInitials(name) {
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  }

  function renderPatientList(data) {
    if (!patientTableBody) return;

    if (data.length === 0) {
      patientTableBody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align: center; padding: 32px 16px; color: #64748b;">
            No patient records matching your search.
          </td>
        </tr>
      `;
      if (patientCountBadge) patientCountBadge.textContent = '0 Patients';
      return;
    }

    let rowsHtml = '';
    data.forEach(function (patient) {
      rowsHtml += `
        <tr>
          <td>
            <div class="patient-cell-profile">
              <div class="patient-avatar">${getInitials(patient.name)}</div>
              <div class="patient-main-info">
                <span class="patient-name">${patient.name}</span>
                <span class="patient-demographics">${patient.age} Yrs • ${patient.gender}</span>
              </div>
            </div>
          </td>
          <td>
            <span class="id-chip">${patient.id}</span>
          </td>
          <td>
            <span class="date-chip">📅 ${patient.date}</span>
          </td>
          <td>
            <span class="dept-pill">${patient.department}</span>
          </td>
          <td>
            <span class="status-chip">${patient.status}</span>
          </td>
          <td style="text-align: right;">
            <button type="button" class="btn-view-patient" data-id="${patient.id}" aria-label="View details for ${patient.name}">
              <span>👁 View Patient</span>
            </button>
          </td>
        </tr>
      `;
    });

    patientTableBody.innerHTML = rowsHtml;

    if (patientCountBadge) {
      patientCountBadge.textContent = `${data.length} Patients Listed`;
    }

    // Attach click listeners to "View Patient" buttons
    const viewButtons = patientTableBody.querySelectorAll('.btn-view-patient');
    viewButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const patientId = this.getAttribute('data-id');
        openViewPatientModal(patientId);
      });
    });
  }

  // Initial table render
  renderPatientList(patientsData);

  // =======================================================================
  // MULTI-CRITERIA PATIENT FILTERING (KEYWORD + CATEGORY + STATUS)
  // =======================================================================
  const patientCategoryFilter = document.getElementById('patient-category-filter');
  const patientStatusFilter = document.getElementById('patient-status-filter');
  const clearPatientSearch = document.getElementById('clear-patient-search');
  const btnResetFilters = document.getElementById('btn-reset-filters');

  function applyPatientFilters() {
    const q = patientSearchInput ? patientSearchInput.value.trim().toLowerCase() : '';
    const selectedCategory = patientCategoryFilter ? patientCategoryFilter.value : 'all';
    const selectedStatus = patientStatusFilter ? patientStatusFilter.value : 'all';

    // Toggle clear search button
    if (clearPatientSearch) {
      clearPatientSearch.style.display = q ? 'flex' : 'none';
    }

    // Toggle reset filters button
    const isFiltered = q !== '' || selectedCategory !== 'all' || selectedStatus !== 'all';
    if (btnResetFilters) {
      btnResetFilters.style.display = isFiltered ? 'inline-flex' : 'none';
    }

    const filtered = patientsData.filter(function (p) {
      // 1. Text keyword search
      const matchesSearch = !q || (
        p.name.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q) ||
        p.department.toLowerCase().includes(q) ||
        p.diagnosis.toLowerCase().includes(q)
      );

      // 2. Category / Department match
      const matchesCategory = selectedCategory === 'all' || p.department === selectedCategory;

      // 3. Status match
      const matchesStatus = selectedStatus === 'all' || p.status.toLowerCase().includes(selectedStatus.toLowerCase());

      return matchesSearch && matchesCategory && matchesStatus;
    });

    renderPatientList(filtered);
  }

  // Hook up filter event listeners
  if (patientSearchInput) {
    patientSearchInput.addEventListener('input', applyPatientFilters);
  }

  if (patientCategoryFilter) {
    patientCategoryFilter.addEventListener('change', applyPatientFilters);
  }

  if (patientStatusFilter) {
    patientStatusFilter.addEventListener('change', applyPatientFilters);
  }

  if (clearPatientSearch) {
    clearPatientSearch.addEventListener('click', function () {
      if (patientSearchInput) {
        patientSearchInput.value = '';
        applyPatientFilters();
        patientSearchInput.focus();
      }
    });
  }

  if (btnResetFilters) {
    btnResetFilters.addEventListener('click', function () {
      if (patientSearchInput) patientSearchInput.value = '';
      if (patientCategoryFilter) patientCategoryFilter.value = 'all';
      if (patientStatusFilter) patientStatusFilter.value = 'all';
      applyPatientFilters();
    });
  }

  // =======================================================================
  // VIEW PATIENT MODAL POPUP
  // =======================================================================
  function openViewPatientModal(patientId) {
    const patient = patientsData.find(function (p) {
      return p.id === patientId;
    });

    if (!patient || !viewModal) return;

    // Set modal headers
    const modalIdEl = document.getElementById('view-modal-id');
    const modalNameEl = document.getElementById('view-modal-name');
    const modalBodyEl = document.getElementById('view-modal-body');

    if (modalIdEl) modalIdEl.textContent = patient.id;
    if (modalNameEl) modalNameEl.textContent = `${patient.name} (${patient.age} Yrs, ${patient.gender})`;

    if (modalBodyEl) {
      modalBodyEl.innerHTML = `
        <div class="patient-profile-modal-grid">
          
          <!-- Basic Clinical & Demographic Info -->
          <div class="modal-info-section">
            <div class="modal-section-title">
              <span>📋 Consultation &amp; Primary Diagnosis</span>
            </div>
            <div class="modal-data-columns">
              <div class="modal-data-item">
                <span class="modal-label">Primary Diagnosis</span>
                <span class="modal-value" style="color: #0369a1;">${patient.diagnosis}</span>
              </div>
              <div class="modal-data-item">
                <span class="modal-label">Clinical Department</span>
                <span class="modal-value">${patient.department}</span>
              </div>
              <div class="modal-data-item">
                <span class="modal-label">Date of Consultation</span>
                <span class="modal-value">${patient.date}</span>
              </div>
              <div class="modal-data-item">
                <span class="modal-label">Attending Therapist</span>
                <span class="modal-value">${patient.therapist}</span>
              </div>
            </div>
          </div>

          <!-- Rehabilitation Progress & Status -->
          <div class="modal-info-section">
            <div class="modal-section-title">
              <span>📈 Rehabilitation Progress &amp; Pain Monitoring</span>
            </div>
            <div class="modal-data-columns">
              <div class="modal-data-item">
                <span class="modal-label">Current Rehab Status</span>
                <span class="modal-value">${patient.status}</span>
              </div>
              <div class="modal-data-item">
                <span class="modal-label">Reported Pain Score</span>
                <span class="modal-value" style="color: #d97706; font-weight: 700;">${patient.painScore}</span>
              </div>
              <div class="modal-data-item">
                <span class="modal-label">Weekly Schedule</span>
                <span class="modal-value">${patient.sessionSchedule}</span>
              </div>
            </div>

            <!-- Mobility Progress Bar -->
            <div class="modal-progress-bar-wrap">
              <div style="display: flex; justify-content: space-between; font-size: 0.72rem; font-weight: 600; color: #475569;">
                <span>Mobility &amp; Functional Recovery</span>
                <span>${patient.mobilityProgress}% Target Reached</span>
              </div>
              <div class="modal-progress-track">
                <div class="modal-progress-fill" style="width: ${patient.mobilityProgress}%;"></div>
              </div>
            </div>
          </div>

          <!-- Contact & Emergency Information -->
          <div class="modal-info-section">
            <div class="modal-section-title">
              <span>📞 Contact &amp; Emergency Guardian</span>
            </div>
            <div class="modal-data-columns">
              <div class="modal-data-item">
                <span class="modal-label">Patient Phone</span>
                <span class="modal-value">${patient.phone}</span>
              </div>
              <div class="modal-data-item">
                <span class="modal-label">Emergency Contact</span>
                <span class="modal-value">${patient.emergency}</span>
              </div>
            </div>
          </div>

        </div>
      `;
    }

    viewModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeViewModal() {
    if (viewModal) {
      viewModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  const btnCloseView = document.getElementById('btn-close-view-modal');
  const btnCloseViewFooter = document.getElementById('btn-view-close-footer');
  if (btnCloseView) btnCloseView.addEventListener('click', closeViewModal);
  if (btnCloseViewFooter) btnCloseViewFooter.addEventListener('click', closeViewModal);

  // =======================================================================
  // NEW PATIENT REGISTRATION MODAL FORM
  // =======================================================================
  const btnOpenNewPatient = document.getElementById('btn-open-new-patient');
  const btnCloseNewModal = document.getElementById('btn-close-new-modal');
  const btnCancelNewModal = document.getElementById('btn-cancel-new-modal');
  const newPatientForm = document.getElementById('new-patient-form');
  const regDateInput = document.getElementById('reg-date');

  function openNewPatientModal() {
    if (!newPatientModal) return;

    // Set default date to today (YYYY-MM-DD)
    if (regDateInput && !regDateInput.value) {
      const today = new Date().toISOString().split('T')[0];
      regDateInput.value = today;
    }

    newPatientModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus on first input
    const firstInput = document.getElementById('reg-name');
    if (firstInput) setTimeout(() => firstInput.focus(), 100);
  }

  function closeNewPatientModal() {
    if (newPatientModal) {
      newPatientModal.classList.remove('active');
      document.body.style.overflow = '';
      if (newPatientForm) newPatientForm.reset();
    }
  }

  if (btnOpenNewPatient) btnOpenNewPatient.addEventListener('click', openNewPatientModal);
  if (btnCloseNewModal) btnCloseNewModal.addEventListener('click', closeNewPatientModal);
  if (btnCancelNewModal) btnCancelNewModal.addEventListener('click', closeNewPatientModal);

  // Format YYYY-MM-DD into "DD Mon YYYY"
  function formatDateString(dateStr) {
    if (!dateStr) return '05 Nov 2026';
    const date = new Date(dateStr + 'T00:00:00');
    if (isNaN(date.getTime())) return dateStr;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = String(date.getDate()).padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }

  function showToast(message) {
    if (!toastNotification) return;
    toastNotification.textContent = message;
    toastNotification.style.display = 'flex';
    setTimeout(function () {
      toastNotification.style.display = 'none';
    }, 3800);
  }

  // Handle Form Submission
  if (newPatientForm) {
    newPatientForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('reg-name').value.trim();
      const age = parseInt(document.getElementById('reg-age').value, 10);
      const gender = document.getElementById('reg-gender').value;
      const rawDate = document.getElementById('reg-date').value;
      const department = document.getElementById('reg-dept').value;
      const diagnosis = document.getElementById('reg-diagnosis').value.trim();
      const phone = document.getElementById('reg-phone').value.trim();
      const emergency = document.getElementById('reg-emergency').value.trim();

      // Generate a Unique Patient ID
      const nextNum = 210 + patientsData.length;
      const newId = `XEN-2026-0${nextNum}`;

      const newPatientObj = {
        id: newId,
        name: name,
        age: age,
        gender: gender,
        date: formatDateString(rawDate),
        department: department,
        diagnosis: diagnosis,
        therapist: 'Dr. Sarah Jenkins, PT',
        phone: phone,
        emergency: emergency,
        status: 'New Intake (Pending Eval)',
        painScore: '4 / 10 (Baseline)',
        mobilityProgress: 10,
        sessionSchedule: 'Schedule Pending Initial Assessment'
      };

      // Add to beginning of array
      patientsData.unshift(newPatientObj);

      // Re-render table with active filters
      applyPatientFilters();

      // Close modal and show confirmation toast
      closeNewPatientModal();
      showToast(`✓ Patient ${name} (${newId}) registered successfully!`);
    });
  }

  // Close modals when clicking backdrop or pressing Escape
  window.addEventListener('click', function (e) {
    if (viewModal && e.target === viewModal) closeViewModal();
    if (newPatientModal && e.target === newPatientModal) closeNewPatientModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeViewModal();
      closeNewPatientModal();
    }
  });
});
