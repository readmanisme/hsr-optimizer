import { Flex, theme, Typography } from 'antd'
import CheckableTag from 'antd/lib/tag/CheckableTag'
import { ElementName, ElementToDamage, PathName, PathNames } from 'lib/constants/constants'
import { Assets } from 'lib/rendering/assets'
import { arrayIncludes } from 'lib/utils/arrayUtils'
import { ReactElement } from 'react'

const { useToken } = theme

const { Paragraph } = Typography

const parentW = 100
const parentH = 150

export const CardGridItemContent = (props: {
  imgSrc: string,
  text: string,
  innerW: number,
  innerH: number,
  rows: number,
}) => {
  return (
    <div>
      <img
        width={props.innerW}
        src={props.imgSrc}
        style={{
          transform: `translate(${(props.innerW - parentW) / 2 / props.innerW * -100}%, ${(props.innerH - parentH) / 2 / props.innerH * -100}%)`,
        }}
      />
      <Paragraph
        ellipsis={{ rows: props.rows }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '110%',
          textAlign: 'center',
          background: '#282B31',
          color: '#D0D0D2',
          marginLeft: '-5%',
          paddingLeft: 10,
          paddingRight: 10,
          lineHeight: '16px',
          height: 18 * props.rows,
          alignItems: 'center',
          marginBottom: 0,
          fontSize: 13,
        }}
      >
        <div
          style={{
            position: 'relative',
            top: '50%',
            transform: 'translateY(-50%)',
            maxHeight: 18 * props.rows,
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          }}
        >
          {props.text}
        </div>
      </Paragraph>
    </div>
  )
}

export function generatePathTags() {
  return Object.keys(PathNames).map((x) => {
    return {
      key: x as PathName,
      display: <img style={{ width: 32 }} src={Assets.getPath(x)} />,
    }
  })
}

export function generateRarityTags() {
  return [5, 4, 3].map((x) => {
    const stars: ReactElement[] = []
    for (let i = 0; i < x; i++) {
      stars.push(<img key={i} style={{ width: 16 }} src={Assets.getStar()} />)
    }
    return {
      key: x,
      display: (
        <Flex flex={1} justify='center' align='center' style={{ marginTop: 1 }}>
          {stars}
        </Flex>
      ),
    }
  })
}

export function generateElementTags() {
  return Object.keys(ElementToDamage).map((x) => {
    return {
      key: x as ElementName,
      display: <img style={{ width: 30 }} src={Assets.getElement(x)} />,
    }
  })
}

export function SegmentedFilterRow<T extends string | number>(props: {
  tags: { key: T, display: ReactElement }[],
  flexBasis: string,
  currentFilter: NoInfer<T>[],
  setCurrentFilters(filters: NoInfer<T>[]): void,
}) {
  const { token } = useToken()
  const { currentFilter, flexBasis, tags, setCurrentFilters } = props
  const selectedTags = currentFilter

  const handleChange = (tag: T, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t != tag)

    setCurrentFilters(nextSelectedTags)
  }

  return (
    <Flex
      style={{
        flexWrap: 'wrap',
        flexGrow: 1,
        backgroundColor: token.colorBgContainer,
        boxShadow: `0px 0px 0px 1px ${token.colorBorder} inset`,
        borderRadius: 6,
        overflow: 'hidden',
        height: 40,
      }}
    >
      {tags.map((tag) => (
        <CheckableTag
          key={tag.key}
          checked={arrayIncludes(selectedTags, tag.key)}
          onChange={(checked) => handleChange(tag.key, checked)}
          style={{
            flex: 1,
            flexBasis: flexBasis,
            boxShadow: `1px 1px 1px 0px ${token.colorBorder}`,
            backgroundColor: arrayIncludes(selectedTags, tag.key) ? token.colorPrimary : 'transparent',
          }}
        >
          <Flex align='center' justify='space-around' style={{ height: '100%' }}>
            {tag.display}
          </Flex>
        </CheckableTag>
      ))}
    </Flex>
  )
}
