/ script.js

document.addEventListener('DOMContentLoaded', function () {
    // Mock data for doctors and appointments
    const doctors = [
      { id: 1, name: 'Dr. Smith', specialty: 'Cardiologist' },
      { id: 2, name: 'Dr. Johnson', specialty: 'Dermatologist' },
      { id: 3, name: 'Dr. Williams', specialty: 'Pediatrician' },
    ];
  
    const appointments = [
      { id: 1, doctor: 'Dr. Smith', date: '2023-12-01' },
      { id: 2, doctor: 'Dr. Johnson', date: '2023-12-10' },
    ];
  
    // Display doctors
    const doctorList = document.getElementById('doctor-list');
    doctors.forEach(doctor => {
      const doctorCard = document.createElement('div');
      doctorCard.classList.add('doctor-card');
      doctorCard.innerHTML = `<h3>${doctor.name}</h3><p>${doctor.specialty}</p><button onclick="scheduleAppointment(${doctor.id})">Book Appointment</button>`;
      doctorList.appendChild(doctorCard);
    });
  
    // Display appointments
    const appointmentList = document.getElementById('appointment-list');
    appointments.forEach(appointment => {
      const appointmentItem = document.createElement('li');
      appointmentItem.innerHTML = `<strong>${appointment.doctor}</strong> - ${appointment.date}`;
      appointmentList.appendChild(appointmentItem);
    });
  });
  
  function scheduleAppointment(doctorId) {
    const selectedDoctor = doctors.find(doctor => doctor.id === doctorId);
  
    // In a real application, you would implement logic to schedule appointments.
    // For simplicity, let's just display an alert here.
    alert(`Appointment scheduled with ${selectedDoctor.name}`);
  }


function scheduleAppointment(event) {
    event.preventDefault();
  
    const selectedDoctorId = document.getElementById('doctor').value;
    const selectedDate = document.getElementById('date').value;
  
    if (!selectedDoctorId || !selectedDate) {
      alert('Please select a doctor and choose a date.');
      return;
    }
  
    const selectedDoctor = doctors.find(doctor => doctor.id === parseInt(selectedDoctorId));
  
    // In a real application, you would send this data to the backend for processing.
    // For simplicity, let's just display an alert here.
    alert(`Appointment scheduled with ${selectedDoctor.name} on ${selectedDate}`);
  }
