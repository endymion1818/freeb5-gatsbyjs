import styled from 'styled-components'

export interface IColumnProps {
  /**
   * alignment along vertical axis
   * @default center
   */
  verticalAlign?: string
  /**
   * gap above top of item
   * @default 0
   */
  bufferTop?: string
  /**
   * gap below bottom of item
   * @default 0
   */
  bufferBottom?: string
  /**
   * text alignment
   * @default left
   */
  textAlign?: string
}

const Column = styled.div<IColumnProps>`
    display: flex;
    flex-direction: column;

    align-self: ${({ verticalAlign }) => verticalAlign};

    ${({ bufferTop }) => bufferTop && `margin-top: ${bufferTop};`}
    ${({ bufferBottom }) => bufferBottom && `margin-bottom: ${bufferBottom};`}

    ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}

    > h1,
    > h2,
    > h3,
    > h4,
    > h5,
    > h6 {
        flex: 1;
    }
    > p {
        flex: 2;

        & ~ div[class*='Button'] {
        flex: 0;
        }
    }
    > img {
        width: 100%;
    }
`

Column.defaultProps = {
  verticalAlign: 'center',
  textAlign: 'left',
  bufferTop: '0rem',
  bufferBottom: '0rem',
}
export default Column
