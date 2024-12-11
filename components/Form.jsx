import React, { useState } from 'react';
import '../components/form.css'

const Form = () => {
  const [ownerData, setOwnerData] = useState({
    name: '',
    phone: '',
    address: '',
    profession: '',
  });

  const [petData, setPetData] = useState({
    name: '',
    breed: '',
    age: '',
    description: '',
  });

  const [schedule, setSchedule] = useState({
    period: '',
    time: '',
    hours: 1,
  });

  const handleOwnerChange = (e) => {
    const { name, value } = e.target;
    setOwnerData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePetChange = (e) => {
    const { name, value } = e.target;
    setPetData((prev) => ({ ...prev, [name]: value }));
  };

  const handleScheduleChange = (e) => {
    const { name, value } = e.target;
    setSchedule((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalCost = schedule.hours * 15; // 15$/hora
    console.log({
      ownerData,
      petData,
      schedule,
      totalCost,
    });

    alert(`Cadastro realizado com sucesso! Custo total: $${totalCost}`);

    setOwnerData({
        name: '',
        phone: '',
        address: '',
        profession: '',
      });

      setPetData({
        name: '',
        breed: '',
        age: '',
        description: '',
      });

      setSchedule({
        period: '',
        time: '',
        hours: 1,
      });

  };

  return (
    <div className='form-content'>

      <p>This is an interactive registration form for a pet walking service, developed with React. It is designed to simplify the collection of owner and pet information, as well as to schedule walking appointments.

Features:
	<br /><br />1.	Owner Registration:
	•	Collects information such as name, phone, address, and profession.
	<br /> <br />2.	Pet Registration:
	•	Allows registration of the pet’s name, breed, age, and a brief description.
	<br /> <br />3.	Walk Scheduling:
	•	Offers options to select the period (morning or afternoon), time, and walk duration.
	•	Automatically calculates the total cost based on the number of hours scheduled ($15/hour).
	<br /><br />4.	Interactivity and Feedback:
	•	The form fields are updated in real time as the user types.
	•	After submission, the data is displayed in the console, and the form fields are automatically cleared.
	<br /><br />5.	Modern Styling:
	•	Responsive and visually appealing interface focused on usability and user experience.

Key Differentiators:
	•	Efficient state management with useState.
	•	Validation of required fields and success messages after registration.
	•	Modular code, easily adaptable for other functionalities.
  Technologies Used:
	•	React.js
	•	JavaScript (ES6+)
	•	Modern and responsive CSS</p>
      <form onSubmit={handleSubmit}>
        {/* Dados do Proprietário */}
        <fieldset>
          <legend>Dados do Proprietário</legend>
          <input
            type="text"
            name="name"
            value={ownerData.name}
            onChange={handleOwnerChange}
            placeholder="Nome"
            required
          />
          <input
            type="tel"
            name="phone"
            value={ownerData.phone}
            onChange={handleOwnerChange}
            placeholder="Telefone"
            required
          />
          <input
            type="text"
            name="address"
            value={ownerData.address}
            onChange={handleOwnerChange}
            placeholder="Endereço"
            required
          />
          <input
            type="text"
            name="profession"
            value={ownerData.profession}
            onChange={handleOwnerChange}
            placeholder="Profissão"
          />
        </fieldset>

        {/* Dados do Pet */}
        <fieldset>
          <legend>Dados do Pet</legend>
          <input
            type="text"
            name="name"
            value={petData.name}
            onChange={handlePetChange}
            placeholder="Nome do Pet"
            required
          />
          <input
            type="text"
            name="breed"
            value={petData.breed}
            onChange={handlePetChange}
            placeholder="Raça"
            required
          />
          <input
            type="number"
            name="age"
            value={petData.age}
            onChange={handlePetChange}
            placeholder="Idade"
            required
          />
          <textarea
            name="description"
            value={petData.description}
            onChange={handlePetChange}
            placeholder="Pequeno resumo sobre o pet"
            rows="4"
          />
        </fieldset>

        {/* Agendamento */}
        <fieldset>
          <legend>Agendamento</legend>
          <label>
            Período:
            <select name="period" value={schedule.period} onChange={handleScheduleChange} required>
              <option value="">Selecione</option>
              <option value="morning">Manhã</option>
              <option value="afternoon">Tarde</option>
            </select>
          </label>
          <label>
            Horário:
            <input
              type="time"
              name="time"
              value={schedule.time}
              onChange={handleScheduleChange}
              required
            />
          </label>
          <label>
            Horas de Passeio:
            <input
              type="number"
              name="hours"
              value={schedule.hours}
              onChange={handleScheduleChange}
              min="1"
              max="8"
            />
          </label>
          <p>Custo por hora: $15</p>
          <p>Total: ${schedule.hours * 15}</p>
        </fieldset>
        <button type="submit" style={{ padding: '10px 20px', background: '#4caf50', color: '#fff', border: 'none', borderRadius: '5px' }}>
          Cadastrar
        </button>
      </form>

    </div>
  );
};

export default Form;