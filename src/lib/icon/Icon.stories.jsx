import styled from 'styled-components';
import { css } from 'styled-components';
import { Icon } from './icon';
import { icons } from './icons-set';

const Meta = styled.div`
  color: #666;
  font-size: 12px;
`;

const Heading = styled.h2`
    color: #666;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 24px;
`

const Item = styled.li`
  display: flex;
  border: 1px lightgrey solid;
  border-radius: 12px;
  flex-direction: column;
  width: 96px;
  align-items: center;
  gap: 12px;
  padding: 12px;

  ${(props) =>
        props.minimal &&
        css`
      flex: none;
      min-width: auto;
      padding: 0;
      background: #fff;
      border: 1px solid #666;

      svg {
        display: block;
        margin-right: 0;
        width: 48px;
        height: 48px;
      }
    `};
`;

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 16px;
  list-style: none;
`;

export default {
    title: 'Компоненты/Icon',
    component: Icon,
    parameters: {
        status: {
            type: "stable", // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
        },
        tags: ["autodocs"],
    },
};

export const withNames = {
    render: (args) => (
        <>
            <Heading>There are {Object.keys(icons).length} icons</Heading>
            <List>
                {Object.keys(icons).map((key) => (
                    <Item key={key}>
                        <Icon iconName={key} {...args} />
                        <Meta>{key}</Meta>
                    </Item>
                ))}
            </List>
        </>
    ),
    args: {
        size: 24
    },
};

export const InlinePlacement = {
    render: (args) => (
        <>
            this is an inline <Icon {...args} /> icon (default)
        </>
    ),
    args: {
        iconName: 'user',
        'aria-label': 'user',
        size: 24
    },
};

export const BlockPlacement = {
    render: (args) => (
        <>
            this is a block <Icon {...args} /> icon
        </>
    ),
    args: {
        iconName: 'chevronUp',
        'aria-label': 'Happy face',
        block: true,
        size: 24
    },
};
