import axios, { AxiosResponse } from "axios";

interface UserData {
  username?: string;
  email?: string;
  password?: string;
}

interface JournalData {
  title?: string;
  content?: string;
  category?: string;
}

const API_URL = "http://127.0.0.1:8000"; 

const apiService = {
  createUser: async (userData: UserData): Promise<UserData | null> => {
    try {        
      console.log("create user request: ", userData);
      const csrfTokenResponse = await fetch(`${API_URL}/csrf-token/`);
      const data = await csrfTokenResponse.json();
      const csrfToken = data.csrftoken;
      
      console.log("csrfToken: ", csrfToken);
      const response: AxiosResponse<UserData> = await axios.post(
        `${API_URL}/users/`,
        userData,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken, 
          },
        }
      );
      console.log("create user response: ", response);
      return response.data;
    } catch (error: any) {
      console.error("Axios Error:", error.message);
      console.error(JSON.stringify(error));
 
      return null;
    }
  },
  updateUser: async (userId: string, userData: UserData): Promise<UserData> => {
    const response: AxiosResponse<UserData> = await axios.put(
      `${API_URL}/users/${userId}/`,
      userData
    );
    return response.data;
  },
  deleteUser: async (userId: string): Promise<void> => {
    await axios.delete(`${API_URL}/users/${userId}/`);
  },
  createJournal: async (journalData: JournalData): Promise<JournalData> => {
    const response: AxiosResponse<JournalData> = await axios.post(
      `${API_URL}/journals/`,
      journalData
    );
    return response.data;
  },
  updateJournal: async (
    journalId: string,
    journalData: JournalData
  ): Promise<JournalData> => {
    const response: AxiosResponse<JournalData> = await axios.put(
      `${API_URL}/journals/${journalId}/`,
      journalData
    );
    return response.data;
  },
  deleteJournal: async (journalId: string): Promise<void> => {
    await axios.delete(`${API_URL}/journals/${journalId}/`);
  },
  getUserJournals: async (
    userId: string,
    startDate: string,
    endDate: string
  ): Promise<any[]> => {
    const response: AxiosResponse<any[]> = await axios.get(
      `${API_URL}/journals/?user=${userId}&date_range=${startDate},${endDate}`
    );
    return response.data;
  },
};

export default apiService;
