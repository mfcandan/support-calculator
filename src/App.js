import { Flex, Button, Heading, Input, Icon, Box } from "bumbag";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
  const [allExpense, setAllExpense] = useState();
  const [staffGoes, setStaffGoes] = useState();
  const [supportRate, setSupportRate] = useState(70);
  const [selfCapital, setselfCapital] = useState(0);
  const [outSource, setOutSource] = useState(0);

  const handleCalculate = () => {
    let desteklenen =
      (parseInt(allExpense) - parseInt(staffGoes)) *
      (parseInt(supportRate) / 100);
    let disKaynak = desteklenen + parseInt(staffGoes);
    let ozKaynak = parseInt(allExpense) - disKaynak;
    setOutSource(disKaynak);
    setselfCapital(ozKaynak);
  };

  return (
    <>
      <Flex
        height="100vh"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        paddingX={12}
      >
        <Box width={{ "min-desktop": "30vw" }}>
          <Flex justifyContent="center" marginBottom={8}>
            <Icon
              fontSize="36px"
              color="primary"
              aria-label="Settings"
              icon={faCalculator}
              type="font-awesome"
            />
          </Flex>
          <Heading use="h2" textAlign="center">
            Support Calculator
          </Heading>
          <Input
            type="number"
            marginTop={8}
            label="Tüm Gider"
            value={allExpense}
            onChange={(e) => setAllExpense(e.target.value)}
          />
          <Input
            type="number"
            marginTop={4}
            label="Personel Gider"
            value={staffGoes}
            onChange={(e) => setStaffGoes(e.target.value)}
          />
          <Input
            type="number"
            marginTop={4}
            label="Destek Oranı (%)"
            value={supportRate}
            onChange={(e) => setSupportRate(e.target.value)}
          />
          <Button
            type="number"
            marginTop={8}
            width="100%"
            palette="success"
            onClick={() => handleCalculate()}
          >
            Hesapla
          </Button>
          {selfCapital && outSource ? (
            <Box
              borderColor="primary"
              border="default"
              borderRadius={4}
              marginTop={12}
              padding="major-2"
            >
              <Flex flexDirection="row">
                <Heading use="h4" marginRight={4}>
                  Öz Kaynak:
                </Heading>
                <Heading use="h4">{parseInt(selfCapital, 10)} TL</Heading>
              </Flex>
              <Flex flexDirection="row" marginTop={4}>
                <Heading use="h4" marginRight={4}>
                  Dış Kaynak:
                </Heading>
                <Heading use="h4">{parseInt(outSource, 10)} TL</Heading>
              </Flex>
              <Flex flexDirection="row" marginTop={4}>
                <Heading use="h4" marginRight={4}>
                  Toplam:
                </Heading>
                <Heading use="h4">{selfCapital + outSource} TL</Heading>
              </Flex>
            </Box>
          ) : (
            ""
          )}
        </Box>
      </Flex>
    </>
  );
}

export default App;
