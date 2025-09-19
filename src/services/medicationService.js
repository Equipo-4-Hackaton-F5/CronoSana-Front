// GET - Get all medicines
export function getAllMedicines() {
  return medicines;
}

// GET ONE - Get a medicine by id
export function getMedicine(id) {
  return medicines.find(med => med.id === id) || null;
}

// POST - Create a new medicine
export const medicineService = {
  async createMedicine(testBase) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/medicines`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testBase)
      });

      if (!response.ok) {
        throw new Error(`Medicine not found status: ${response.status}`);
      }

      const createdMedicine = await response.json();
      return createdMedicine;
    } catch (error) {
      console.error('Medicine not found', error);
      throw new Error('Medicine not found');
    }
  }
}

// UPDATE - Update a medicine by id
export function updateMedicine(id, updatedMed) {
  const index = medicines.findIndex(med => med.id === id);
  if (index === -1) return null;
  if (updatedMed.name && typeof updatedMed.name !== 'string') {
    throw new Error("Medication not found 💊");
  }
  medicines[index] = { ...medicines[index], ...updatedMed };
  return medicines[index];
}

// UPDATE - Update doseLog by id
export function updateDoseLog(id, updatedLog) {
  const index = doseLogs.findIndex(log => log.id === id);
  if (index === -1) return null;
  doseLogs[index] = { ...doseLogs[index], ...updatedLog };
  return doseLogs[index];
}

// DELETE - Delete a medicine by id
export function deleteMedicine(id) {
  const index = medicines.findIndex(med => med.id === id);
  if (index === -1) return false;

  // Delete associated doseLog
  doseLogs = doseLogs.filter(log => log.medicineId !== id);

  medicines.splice(index, 1);
  return true;
}

// DELETE - Delete doeLog by id
export function deleteDoseLog(id) {
  const index = doseLogs.findIndex(log => log.id === id);
  if (index === -1) return false;
  doseLogs.splice(index, 1);
  return true;
}