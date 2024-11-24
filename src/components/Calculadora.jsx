import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Resend } from 'resend';

const DPVATCalculator = () => {
  const [accidentType, setAccidentType] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [disabilityPercentage, setDisabilityPercentage] = useState("");
  const [result, setResult] = useState("");

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

    if (accidentType === "morte") {
      const indemnity =
        indemnityValues.morte * (vehicleSurcharge[vehicleType] || 1);
      calculatedResult = `A indenização por morte será de R$ ${indemnity.toFixed(
        2
      )}.`;
    } else if (accidentType === "invalidez_total") {
      const indemnity =
        indemnityValues.invalidez_total * (vehicleSurcharge[vehicleType] || 1);
      calculatedResult = `A indenização por invalidez total será de R$ ${indemnity.toFixed(
        2
      )}.`;
    } else if (accidentType === "invalidez_parcial") {
      if (disabilityPercentage > 0 && disabilityPercentage <= 100) {
        const indemnity =
          indemnityValues.invalidez_total *
          (disabilityPercentage / 100) *
          (vehicleSurcharge[vehicleType] || 1);
        calculatedResult = `A indenização por invalidez parcial (${disabilityPercentage}%) será de R$ ${indemnity.toFixed(
          2
        )}.`;
      } else {
        calculatedResult =
          "Por favor, insira um percentual de invalidez válido (0 a 100%).";
      }
    } else if (accidentType === "despesas") {
      const reembolso =
        Math.min(Number(expenseAmount), indemnityValues.despesas) *
        (vehicleSurcharge[vehicleType] || 1);
      calculatedResult = `O reembolso para despesas médicas será de até R$ ${reembolso.toFixed(
        2
      )}.`;
    } else {
      calculatedResult = "Por favor, selecione um tipo de dano.";
    }

    setResult(calculatedResult);
    const valor = localStorage.getItem('email');
    console.log(valor)
    fetch('https://cors-anywhere.herokuapp.com/https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer re_AbEVgde5_NFootkkYCRaPfnjqMkJvwes9',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'leocardozo0704@gmail.com',
        subject: 'Resultado do Cálculo DPVAT',
        html: `<p>Seu DPVAT foi gerado no dia ${new Date().toLocaleDateString()}.
               <br><br>Tipo de Dano: ${accidentType} <br>Tipo de Veículo: ${vehicleType} <br>Valor Calculado: ${calculatedResult}</p>`,
      }),
    })
      .then(response => response.json())
      .then(data => console.log('E-mail enviado com sucesso:', data))
      .catch(error => console.error('Erro no envio do e-mail:', error));
    
  };

  return (
    <section className="paginas" id="calculator">
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2 className="titulo-contactme">Calculadora DPVAT</h2>
        <br></br>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            calculateDPVAT();
          }}
        >
          {/* Tipo de dano */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="accident-type-label" sx={{ color: "white" }}>
              Tipo de dano
            </InputLabel>
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
            <InputLabel id="vehicle-type-label" sx={{ color: "white" }}>
              Tipo de veículo
            </InputLabel>
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
                color: "white", // Garantir que a label seja branca
              },
              color: "white", // Definindo a cor do texto no input
            }}
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
            placeholder="Exemplo: 3000"
          />

          {/* Percentual de invalidez */}
          <TextField
            label="Percentual de invalidez (0 a 100%)"
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
                color: "white", // Garantir que a label seja branca
              },
              color: "white", // Definindo a cor do texto no input
            }}
            value={disabilityPercentage}
            onChange={(e) => setDisabilityPercentage(e.target.value)}
            placeholder="Exemplo: 50"
            inputProps={{ min: 0, max: 100 }}
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Calcular
          </Button>
        </form>

        {result && (
          <div
            className="result"
            style={{ marginTop: "20px", fontWeight: "bold", color: "white" }}
          >
            {result}
          </div>
        )}
      </div>
    </section>
  );
};

export default DPVATCalculator;
