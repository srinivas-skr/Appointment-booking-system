let appointments = [];

document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let username = document.getElementById('username').value;
    let petName = document.getElementById('petName').value;
    let date = document.getElementById('appointmentDate').value;
    
    let appointment = {
        id: Date.now(),
        username: username,
        petName: petName,
        date: date
    };
    
    appointments.push(appointment);
    this.reset();
    displayAppointments();
});

document.getElementById('searchInput').addEventListener('input', displayAppointments);
document.getElementById('sortSelect').addEventListener('change', displayAppointments);

function displayAppointments() {
    let appointmentList = document.getElementById('appointmentList');
    let searchTerm = document.getElementById('searchInput').value.toLowerCase();
    let sortBy = document.getElementById('sortSelect').value;
    
    let filteredAppointments = appointments.filter(appointment => 
        appointment.username.toLowerCase().includes(searchTerm) ||
        appointment.petName.toLowerCase().includes(searchTerm) ||
        appointment.date.includes(searchTerm)
    );
    
    filteredAppointments.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    
    appointmentList.innerHTML = '';
    
    filteredAppointments.forEach(appointment => {
        let li = document.createElement('li');
        li.textContent = `Username: ${appointment.username}, Pet: ${appointment.petName}, Date: ${appointment.date}`;
        appointmentList.appendChild(li);
    });
}