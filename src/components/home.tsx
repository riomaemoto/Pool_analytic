import { Center, WrapItem } from "@chakra-ui/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Button } from "@chakra-ui/react";

export const Home = () => {
  const vvv = css`
    background-color: rgba(131, 234, 22, 0.2);
    overflow: hidden;
  `;
  const EContainer = styled.div``;
  const button = css`
    width: 80px;
  `;
  const ETextBox = styled.div`
    background-color: rgba(11, 434, 332);
    text-align: center;
    display: flex;
    border: 0.5px solid;
  `;
  const ETextline = styled.div`
    text-align: center;
    font-weight: 600;
    margin: 6px;
    width: 250px;
  `;
  const ENumber = styled.div`
    text-align: center;
    width: 80px;
    border: 0.5px solid;
  `;
  const EFlex = styled.div`
    display: flex;
    margin: 1px;
  `;
  const EFlex2 = styled.div`
    display: flex;
    margin: 1px;
    margin-left: 161px;
  `;

  return (
    <>
      <Center css={vvv} h="100vh">
        <EContainer>
          <EFlex2>
            <ENumber></ENumber>
            <ENumber>1</ENumber>
            <ETextBox>
              <ETextline>Break</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber></ENumber>
          </EFlex2>

          <EFlex2>
            <ENumber></ENumber>
            <ENumber>1</ENumber>

            <ETextBox>
              <ETextline>Game score</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber></ENumber>
          </EFlex2>

          <EFlex2>
            <ENumber></ENumber>
            <ENumber>1</ENumber>

            <ETextBox>
              <ETextline>Total breaks</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber></ENumber>
          </EFlex2>

          <EFlex>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="whatsapp">
                +1
              </Button>
            </WrapItem>
            <ENumber>1</ENumber>
            <ENumber>1</ENumber>
            <ETextBox>
              <ETextline>Dry breaks</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber>1</ENumber>
            <WrapItem>
              <Button css={button} colorScheme="whatsapp">
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
          </EFlex>

          <EFlex>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="whatsapp">
                +1
              </Button>
            </WrapItem>
            <ENumber>1</ENumber>
            <ENumber>1</ENumber>
            <ETextBox>
              <ETextline>Scratches on break</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber>1</ENumber>
            <WrapItem>
              <Button css={button} colorScheme="whatsapp">
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
          </EFlex>

          <EFlex>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
              <WrapItem>
                <Button css={button} colorScheme="whatsapp">
                  +1
                </Button>
              </WrapItem>
            </WrapItem>
            <ENumber>1</ENumber>
            <ENumber>1</ENumber>
            <ETextBox>
              <ETextline>ball made on break</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber>1</ENumber>
            <WrapItem>
              <Button css={button} colorScheme="whatsapp">
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
          </EFlex>

          <EFlex>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="whatsapp">
                +1
              </Button>
            </WrapItem>
            <ENumber>1</ENumber>
            <ENumber>1</ENumber>
            <ETextBox>
              <ETextline>shot after the break</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber>1</ENumber>
            <WrapItem>
              <Button css={button} colorScheme="whatsapp">
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
          </EFlex>

          <br />
          <EFlex>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="whatsapp">
                +1
              </Button>
            </WrapItem>
            <ENumber>1</ENumber>
            <ENumber>1</ENumber>
            <ETextBox>
              <ETextline>break and run</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber>1</ENumber>
            <WrapItem>
              <Button css={button} colorScheme="whatsapp">
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
          </EFlex>

          <EFlex>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="whatsapp">
                +1
              </Button>
            </WrapItem>
            <ENumber>1</ENumber>
            <ENumber>1</ENumber>
            <ETextBox>
              <ETextline>Consecutive break and runs</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber>1</ENumber>
            <WrapItem>
              <Button css={button} colorScheme="whatsapp">
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
          </EFlex>

          <br />
          <EFlex2>
            <ENumber>1</ENumber>
            <ENumber>1</ENumber>
            <ETextBox>
              <ETextline>Longest game winning streak</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber>1</ENumber>
          </EFlex2>
          <br />
          <EFlex2>
            <ENumber>1</ENumber>
            <ENumber>1</ENumber>
            <ETextBox>
              <ETextline>In game stats</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber>1</ENumber>
          </EFlex2>

          <EFlex2>
            <ENumber>Balls left</ENumber>
            <ENumber>1</ENumber>
            <ETextBox>
              <ETextline>230</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber>Balls left</ENumber>
          </EFlex2>

          <EFlex>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="whatsapp">
                +1
              </Button>
            </WrapItem>
            <ENumber>1</ENumber>
            <ENumber>1</ENumber>
            <ETextBox>
              <ETextline>Balls pocketed</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber>1</ENumber>
            <WrapItem>
              <Button css={button} colorScheme="whatsapp">
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
          </EFlex>

          <br />
          <EFlex>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="whatsapp">
                +1
              </Button>
            </WrapItem>
            <ENumber>1</ENumber>
            <ENumber>1</ENumber>
            <ETextBox>
              <ETextline>Balls Missed</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber>1</ENumber>
            <WrapItem>
              <Button css={button} colorScheme="whatsapp">
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
          </EFlex>

          <EFlex>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="whatsapp">
                +1
              </Button>
            </WrapItem>
            <ENumber>1</ENumber>
            <ENumber>1</ENumber>
            <ETextBox>
              <ETextline>Unforced errors</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber>1</ENumber>
            <WrapItem>
              <Button css={button} colorScheme="whatsapp">
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
          </EFlex>

          <EFlex>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="whatsapp">
                +1
              </Button>
            </WrapItem>
            <ENumber>1</ENumber>
            <ENumber>1</ENumber>
            <ETextBox>
              <ETextline>Safety errors</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber>1</ENumber>
            <WrapItem>
              <Button css={button} colorScheme="whatsapp">
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
          </EFlex>

          <EFlex>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="whatsapp">
                +1
              </Button>
            </WrapItem>
            <ENumber>1</ENumber>
            <ENumber>1</ENumber>
            <ETextBox>
              <ETextline>Kicking Errors</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber>1</ENumber>
            <WrapItem>
              <Button css={button} colorScheme="whatsapp">
                +1
              </Button>
            </WrapItem>
            <WrapItem>
              <Button css={button} colorScheme="red">
                -1
              </Button>
            </WrapItem>
          </EFlex>

          <EFlex2>
            <ENumber>1</ENumber>
            <ENumber>1</ENumber>
            <ETextBox>
              <ETextline>ACCU Stat Performance Rate</ETextline>
            </ETextBox>
            <ENumber>1</ENumber>
            <ENumber>1</ENumber>
          </EFlex2>
        </EContainer>
      </Center>
    </>
  );
};
