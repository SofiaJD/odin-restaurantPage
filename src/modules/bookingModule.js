//Booking module: 

function createBookingSection()
{
    const contentDiv = document.querySelector('#content');

    const bookingDiv = document.createElement('div');
    bookingDiv.setAttribute('id', 'booking');
    bookingDiv.setAttribute('class', 'section');

    const h2 = document.createElement('h2');
    h2.innerText = 'Booking';
    h2.setAttribute('class', 'title');
    bookingDiv.appendChild(h2);

    const p = document.createElement('p');
    p.innerText = 'To make a reservation, please complete the form and choose your preferred date and time.';
    bookingDiv.appendChild(p);

    const formContainerDiv = document.createElement('div');
    formContainerDiv.setAttribute('id', 'formContainer');

    const form = document.createElement('form');
    form.setAttribute('action', '#');
    form.setAttribute('id', 'formBooking');

    const div1 = document.createElement('div');

    const fullNameLbl = document.createElement('label');
    fullNameLbl.setAttribute('for', 'txtFullName');
    fullNameLbl.innerHTML = 'Full name: <br> <input type="text" id="txtFullName" name="fullName"/>';
    div1.appendChild(fullNameLbl);

    const emailLbl = document.createElement('label');
    emailLbl.setAttribute('for', 'txtEmail');
    emailLbl.innerHTML = 'Email: <br> <input type="email" id="txtEmail" name="email"/>';
    div1.appendChild(emailLbl);

    form.appendChild(div1);


    const div2 = document.createElement('div');

    const numberPeopleLbl = document.createElement('label');
    numberPeopleLbl.setAttribute('for', 'txtNumberPeople');
    numberPeopleLbl.innerHTML = 'Number of people:' + 
                                '<br>' + 
                                '<input type="number" id="txtNumberPeople" name="numberOfPeople"/>';
    div2.appendChild(numberPeopleLbl);

    const typeCelebrationLbl = document.createElement('label');
    typeCelebrationLbl.setAttribute('for', 'txtTypeCelebration');
    typeCelebrationLbl.innerHTML = 'Type of celebration:' +
                                    '<br>' +
                                    '<select id="txtTypeCelebration" name="typeOfCelebration">' + 
                                        '<option value="birthday">Birthday</option> ' +
                                        '<option value="anniversary">Anniversary</option> ' +
                                        '<option value="wedding">Wedding</option> ' +
                                        '<option value="corporateEvent">Corporate event</option> ' +
                                        '<option value="familyGathering">Family gathering</option> ' +
                                        '<option value="socialGathering">Social gathering</option> ' +
                                        '<option value="other">Other</option> ' +
                                    '</select>';
    div2.appendChild(typeCelebrationLbl);

    form.appendChild(div2);


    const dateReservationLbl = document.createElement('label');
    dateReservationLbl.setAttribute('for', 'txtDateReservation');
    dateReservationLbl.innerHTML = 'Date and time of reservation' +
                                    '<br>' +
                                    '<input type="datetime-local" id="txtDateReservation" name="dateReservation"/>';
    form.appendChild(dateReservationLbl);

    const br1 = document.createElement('br');
    form.appendChild(br1);

    const dietaryRequirementsLbl = document.createElement('label');
    dietaryRequirementsLbl.setAttribute('for', 'txtDietaryRequirements');
    dietaryRequirementsLbl.innerHTML = 'Dietary requirements:' +
                                        '<br>' +
                                        '<textarea name="dietaryRequirements" id="txtDietaryRequirements" rows="6"></textarea>';
    form.appendChild(dietaryRequirementsLbl);

    const br2 = document.createElement('br');
    form.appendChild(br2);

    const comentsLbl = document.createElement('label');
    comentsLbl.setAttribute('for', 'txtComents');
    comentsLbl.innerHTML = 'Additional observations or comments:' +
                            '<br>' +
                            '<textarea name="comments" id="txtComents" rows="6"></textarea>';
    form.appendChild(comentsLbl);

    const br3 = document.createElement('br');
    form.appendChild(br3);

    const termsLbl = document.createElement('label');
    termsLbl.setAttribute('class', 'checkbox');
    termsLbl.innerHTML = '<input type="checkbox" id="cbTerms" name="termsAndConditions"/>' +
                            'I have read and accept the  <a href="#"> terms and conditions</a> of the reservation.';
    form.appendChild(termsLbl);

    const cancellationLbl = document.createElement('label');
    cancellationLbl.setAttribute('class', 'checkbox');
    cancellationLbl.innerHTML = '<input type="checkbox" id="cbPCancellation" name="cancellationPolicy"/>' +
                            'I have read and accept the  <a href="#"> cancellation policy</a> of the place.';
    form.appendChild(cancellationLbl);


    formContainerDiv.appendChild(form); 
    
    const sendBtn = document.createElement('button');
    sendBtn.setAttribute('form', 'formBooking');
    sendBtn.innerText = 'Send';

    formContainerDiv.appendChild(sendBtn);


    bookingDiv.appendChild(formContainerDiv);

    contentDiv.appendChild(bookingDiv);
}

export default createBookingSection;