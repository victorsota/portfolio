const API_URL = "http://localhost:7043/api/User";

export const authenticateUser = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/authenticate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, senha: password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Erro ao autenticar");
    }

    const data = await response.json();
    
    // Salva o email no localStorage se a autenticação for bem-sucedida
    localStorage.setItem("email", email);

    return data; // Retorna os dados da resposta
  } catch (error) {
    throw error;
  }
};

export const register = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha: password }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro ao cadastrar o usuário");
      }
  
      const data = await response.json();
      
      // Salva o email no localStorage se a autenticação for bem-sucedida
      localStorage.setItem("email", email);
  
      return data; // Retorna os dados da resposta
    } catch (error) {
      throw error;
    }
  };
