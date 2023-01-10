function getDateTime() {
  return new Date().toLocaleString();
}

class Person {
  constructor(name, surname) {
    if (this.constructor === Person) {
      throw new Error("Abstract class Person cannot be instantiated!");
    }
    this.name = name;
    this.surname = surname;
  }
}

class Patient extends Person {
  constructor(name, surname, healthCardNumber, jmbg) {
    super(name, surname);
    this.healthCardNumber = healthCardNumber;
    this.jmbg = jmbg;
    Logger.logCreationOfPatient(this);
  }
  doctor = "";
  myAppointments = [];

  chooseDoctor(doctor) {
    this.doctor = doctor;
    Logger.logChosenDoctor(doctor, this);
  }

  addAppointment(appointment) {
    this.myAppointments.concat(appointment);
  }
}

class Doctor extends Person {
  constructor(name, surname, specialization) {
    super(name, surname);
    this.specialization = specialization;
    Logger.logCreationOfDoctor(this);
  }
  patients = [];
  appointments = [];

  addPatients(patient) {
    this.patients.concat(patient);
    Logger.logAddingPatient(patient, this);
  }

  scheduleAppointment(appointment) {
    this.appointments.concat(appointment);
    Logger.logAppointment(appointment.patient, this);
  }
}

class Logger {
  static logCreationOfPatient(patient) {
    console.log(
      `[${getDateTime()}]`,
      `Patient ${patient.name} ${patient.surname} with health card number ${patient.healthCardNumber} and Unique ID ${patient.jmbg} created.`
    );
  }
  static logCreationOfDoctor(doctor) {
    console.log(
      `[${getDateTime()}]`,
      `Doctor ${doctor.name} ${doctor.surname} who is a specialist in ${doctor.specialization} created.`
    );
  }
  static logChosenDoctor(patient, doctor) {
    console.log(
      `[${getDateTime()}]`,
      `Patient ${patient.name} ${patient.surname} have chosen doctor ${doctor.name} ${doctor.surname}`
    );
  }
  static logAddingPatient(patient, doctor) {
    console.log(
      `[${getDateTime()}]`,
      `${patient.name} ${patient.surname} was added to dr ${doctor.name} patient list`
    );
  }
  static logAppointment(patient, doctor) {
    console.log(
      `[${getDateTime()}]`,
      `Doctor ${doctor.name} ${doctor.surname} has scheduled medical appointment with ${patient.name} ${patient.surname}.`
    );
  }
}

class MedicalExamination {
  constructor(doctor, patient) {
    if (this.constructor === MedicalExamination) {
      throw new Error(
        "Abstract class MedicalExamination cannot be instantiated!"
      );
    }
    this.doctor = doctor;
    this.patient = patient;
    doctor.scheduleAppointment(this);
    patient.addAppointment(this);
  }
}

class BloodPressureExamination extends MedicalExamination {
  constructor(doctor, patient) {
    super(doctor, patient);
    this.typeOfExamination = "blood pressure test";
    this.upperValue = Math.round(Math.random() * 150);
    this.lowerValue = Math.round(Math.random() * 60);
    this.pulse = Math.round(Math.random() * 100);
  }

  doMedicalExamination() {
    console.log(
      `Patient ${this.patient.name} ${this.patient.surname} has had a medical examination for ${this.typeOfExamination}. 
			The results are: \n
			Upper value:${this.upperValue}. \n
			Lower value:${this.lowerValue}. \n
			Pulse:${this.pulse}.`
    );
  }
}

class BloodSugarLevelExamination extends MedicalExamination {
  constructor(doctor, patient) {
    super(doctor, patient);
    this.typeOfExamination = "blood sugar level";
    this.value = Math.round(Math.random() * 20);
    this.lastMeal = "20h last night";
  }

  doMedicalExamination() {
    console.log(
      `Patient ${this.patient.name} ${this.patient.surname} has had a medical examination for ${this.typeOfExamination}. The results are: \n
			Value:${this.value}. \n
			Last meal:${this.lastMeal}.`
    );
  }
}

class CholesterolLevelExamination extends MedicalExamination {
  constructor(doctor, patient) {
    super(doctor, patient);
    this.typeOfExamination = "cholesterol level";
    this.value = Math.round(Math.random() * 6);
    this.lastMeal = "20h last night";
  }

  doMedicalExamination() {
    console.log(
      `Patient ${this.patient.name} ${this.patient.surname} has had a medical examination for ${this.typeOfExamination}. The results are: \n
			Value:${this.value}. \n
			Last meal:${this.lastMeal}.`
    );
  }
}

let doctorOne = new Doctor("Milan", "Jankovic", "cardiology");
let patientOne = new Patient("Dragan", "Draganovic", 12, 23232);

patientOne.chooseDoctor(doctorOne);

doctorOne.addPatients(patientOne);

let appointmentOne = new BloodPressureExamination(doctorOne, patientOne);

appointmentOne.doMedicalExamination();

let appointmentTwo = new BloodSugarLevelExamination(doctorOne, patientOne);

appointmentTwo.doMedicalExamination();

let appointmenttTree = new CholesterolLevelExamination(doctorOne, patientOne);

appointmenttTree.doMedicalExamination();
