import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const DPVATCalculator = () => {
  const [accidentType, setAccidentType] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [disabilityPercentage, setDisabilityPercentage] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);
  const [openHistory, setOpenHistory] = useState(false);

  const accidentTypeMap = {
    morte: 1,
    invalidez_total: 2,
    invalidez_parcial: 3,
    despesas: 4,
  };

  const vehicleTypeMap = {
    carro: 1,
    moto: 2,
    caminhao: 3,
    onibus: 4,
  };

  // Mapeamento inverso para exibir as descrições
  const accidentTypeReverseMap = {
    1: "Morte",
    2: "Invalidez Total",
    3: "Invalidez Parcial",
    4: "Despesas Médicas",
  };

  const vehicleTypeReverseMap = {
    1: "Carro",
    2: "Moto",
    3: "Caminhão",
    4: "Ônibus",
  };

  const calculateDPVAT = () => {
    const indemnityValues = {
      morte: 13500,
      invalidez_total: 13500,
      despesas: 2500,
    };

    const vehicleSurcharge = {
      carro: 1,
      moto: 1.5,
      caminhao: 1.2,
      onibus: 1.3,
    };

    let calculatedResult = "";
    let resultValue = 0;

    if (accidentType === "morte") {
      const indemnity =
        indemnityValues.morte * (vehicleSurcharge[vehicleType] || 1);
      resultValue = indemnity;
      calculatedResult = `A indenização por morte será de R$ ${indemnity.toFixed(2)}.`;
    } else if (accidentType === "invalidez_total") {
      const indemnity =
        indemnityValues.invalidez_total * (vehicleSurcharge[vehicleType] || 1);
      resultValue = indemnity;
      calculatedResult = `A indenização por invalidez total será de R$ ${indemnity.toFixed(2)}.`;
    } else if (accidentType === "invalidez_parcial") {
      if (disabilityPercentage > 0 && disabilityPercentage <= 100) {
        const indemnity =
          indemnityValues.invalidez_total *
          (disabilityPercentage / 100) *
          (vehicleSurcharge[vehicleType] || 1);
        resultValue = indemnity;
        calculatedResult = `A indenização por invalidez parcial (${disabilityPercentage}%) será de R$ ${indemnity.toFixed(2)}.`;
      } else {
        calculatedResult =
          "Por favor, insira um percentual de invalidez válido (0 a 100%).";
      }
    } else if (accidentType === "despesas") {
      const reembolso =
        Math.min(Number(expenseAmount), indemnityValues.despesas) *
        (vehicleSurcharge[vehicleType] || 1);
      resultValue = reembolso;
      calculatedResult = `O reembolso para despesas médicas será de até R$ ${reembolso.toFixed(2)}.`;
    } else {
      calculatedResult = "Por favor, selecione um tipo de dano.";
    }

    setResult(calculatedResult);

    const dataToSend = {
      tipo_dano: accidentTypeMap[accidentType],
      tipo_veiculo: vehicleTypeMap[vehicleType],
      percent_valid: disabilityPercentage ? parseFloat(disabilityPercentage) : null,
      created: new Date().toISOString(),
      resultado: resultValue,
      valor_gasto: accidentType === "despesas" ? parseFloat(expenseAmount) : null,
      userid: localStorage.getItem("userId"),
    };

    fetch('http://localhost:7043/api/Calculator', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const loadHistory = () => {
    const userId = localStorage.getItem("userId");

    fetch(`http://localhost:7043/api/Calculator/user/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setHistory(data);
      })
      .catch((error) => {
        console.error('Error loading history:', error);
      });
  };

  const handleOpenHistory = () => {
    loadHistory();
    setOpenHistory(true);
  };

  const handleCloseHistory = () => {
    setOpenHistory(false);
  };

  return (
    <section className="paginas" id="calculator">
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h2 className="titulo-contactme">Calculadora DPVAT</h2>
        <br />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            calculateDPVAT();
          }}
        >
          {/* Tipo de dano */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="accident-type-label" sx={{ color: "white" }}>Tipo de dano</InputLabel>
            <Select
              labelId="accident-type-label"
              id="accident-type"
              value={accidentType}
              onChange={(e) => setAccidentType(e.target.value)}
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                },
                color: "white",
              }}
            >
              <MenuItem value="morte">Morte</MenuItem>
              <MenuItem value="invalidez_total">Invalidez Total</MenuItem>
              <MenuItem value="invalidez_parcial">Invalidez Parcial</MenuItem>
              <MenuItem value="despesas">Despesas Médicas</MenuItem>
            </Select>
          </FormControl>

          {/* Tipo de veículo */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="vehicle-type-label" sx={{ color: "white" }}>Tipo de veículo</InputLabel>
            <Select
              labelId="vehicle-type-label"
              id="vehicle-type"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                },
                color: "white",
              }}
            >
              <MenuItem value="carro">Carro</MenuItem>
              <MenuItem value="moto">Moto</MenuItem>
              <MenuItem value="caminhao">Caminhão</MenuItem>
              <MenuItem value="onibus">Ônibus</MenuItem>
            </Select>
          </FormControl>

          {/* Valor gasto */}
          <TextField
            label="Valor gasto (somente para despesas médicas)"
            type="number"
            fullWidth
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
              },
              "& .MuiInputLabel-root": {
                color: "white",
              },
            }}
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
          />

          {/* Percentual de invalidez */}
          {accidentType === "invalidez_parcial" && (
            <TextField
              label="Percentual de invalidez"
              type="number"
              fullWidth
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
              }}
              value={disabilityPercentage}
              onChange={(e) => setDisabilityPercentage(e.target.value)}
            />
          )}

          {/* Resultado */}
          {result && (
            <div style={{ marginTop: "20px", fontWeight: "bold", color: "white" }}>
              {result}
            </div>
          )}

          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              mt: 3,
              backgroundColor: "#00796b",
            }}
          >
            Calcular
          </Button>
        </form>
        <br />

        {/* Histórico */}
        <Button
          variant="outlined"
          color="secondary"
          sx={{
            mt: 3,
            color: "white",
            borderColor: "white",
          }}
          onClick={handleOpenHistory}
        >
          Histórico
        </Button>
      </div>

      {/* Modal Histórico */}
      <Modal
        open={openHistory}
        onClose={handleCloseHistory}
        aria-labelledby="modal-history-title"
        aria-describedby="modal-history-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          borderRadius: '10px',
          padding: '20px',
          width: '500px',
          maxHeight: '80%',
          overflowY: 'auto',
        }}>
          <Typography id="modal-history-title" variant="h6" component="h2">
            Histórico de Cálculos
          </Typography>
          <Box sx={{ mt: 2 }}>
            {history.length > 0 ? (
              history.map((item, index) => (
                <Box key={index} sx={{ marginBottom: '10px' }}>
                  <Typography variant="body2">Data: {new Date(item.created).toLocaleString()}</Typography>
                  <Typography variant="body2">Tipo de dano: {accidentTypeReverseMap[item.tipo_dano]}</Typography>
                  <Typography variant="body2">Veículo: {vehicleTypeReverseMap[item.tipo_veiculo]}</Typography>
                  {item.valor_gasto && <Typography variant="body2">Valor gasto: R$ {item.valor_gasto}</Typography>}
                  <Typography variant="body2">Resultado: R$ {item.resultado}</Typography>
                  <hr />
                </Box>
              ))
            ) : (
              <Typography variant="body2">Nenhum histórico encontrado.</Typography>
            )}
          </Box>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleCloseHistory}
            sx={{ mt: 2, backgroundColor: "#00796b" }}
          >
            Fechar
          </Button>
        </Box>
      </Modal>
    </section>
  );
};

export default DPVATCalculator;
