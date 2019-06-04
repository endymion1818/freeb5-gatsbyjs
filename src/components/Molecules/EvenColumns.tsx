import React, { FC } from 'react'
import Column from '../Atoms/Column'
import Row from '../Atoms/Row'

export interface IContentProps {
  /**
   * an array of objects with JSX elements
   * @default <>&nbsp;</>
   */
  innerContent: JSX.Element
}

export interface IRenderContentProps {
  /**
   * an array of objects with JSX elements
   * @default <>&nbsp;</>
   */
  item: IContentProps
  /**
   * index
   * @default 0
   */
  index: number
  /**
   * text alignment
   * @default 'left'
   */
  textAlign?: string
  /**
   * buffer top
   * @default '0rem'
   */
  bufferTop?: string
  /**
   * buffer bottom
   * @default '0rem'
   */
  bufferBottom?: string
  /**
   * vertical align
   * @default 'top'
   */
  verticalAlign?: string
}

export const renderContent: FC<IRenderContentProps> = ({
  item,
  index,
  textAlign = 'left',
  bufferBottom = '0rem',
  bufferTop = '0rem',
  verticalAlign = 'top',
}) => (
  <Column
    key={index}
    textAlign={textAlign}
    bufferBottom={bufferBottom}
    bufferTop={bufferTop}
    verticalAlign={verticalAlign}
  >
    {item.innerContent}
  </Column>
)

export interface IEvenColumnsProps extends IContentProps {
  /**
   * an array of objects with JSX elements
   * @default <>&nbsp;</>
   */
  content: Array<{ innerContent: JSX.Element }>
  /**
   * index
   * @default 0
   */
  index: number
  /**
   * text alignment
   * @default 'left'
   */
  textAlign?: string
  /**
   * buffer top
   * @default '0rem'
   */
  bufferTop?: string
  /**
   * buffer bottom
   * @default '0rem'
   */
  bufferBottom?: string
  /**
   * vertical align
   * @default 'top'
   */
  verticalAlign?: string
}

const EvenColumns: FC<IEvenColumnsProps> = ({
  content,
  textAlign,
  bufferBottom,
  bufferTop,
  verticalAlign,
}) => (
  <Row size={content.length}>
    {content.map((item, index) =>
      renderContent({
        item,
        index,
        textAlign,
        bufferBottom,
        bufferTop,
        verticalAlign,
      })
    )}
  </Row>
)

Column.defaultProps = {}

export default EvenColumns
