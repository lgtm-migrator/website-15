//
// @format

import styled from '@emotion/styled'
import Link from 'gatsby-link'

export default styled(Link)`
  background-color: var(--button-bg-color);
  border-radius: var(--font-size);
  color: var(--button-text-color);
  cursor: pointer;
  display: block;
  font-size: calc(var(--font-size) / 2);
  height: calc(var(--font-size) + var(--font-size) / 4);
  line-height: calc(var(--font-size) + var(--font-size) / 4);
  margin-left: auto;
  margin-right: auto;
  position: relative;
  text-align: center;
  text-shadow: 1px 1px 2px var(--middle-color);
  transition: 0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97);
  user-select: none;
  width: calc(var(--font-size) * 5);
  z-index: 100;

  &:hover {
    background-color: var(--button-hover-bg-color);
    box-shadow: 1px 1px 4px var(--middle-color);
    color: var(--button-hover-text-color);
    text-decoration: none;
    text-shadow: 1px 1px 5px black;
    transform: translateY(-2px);
  }

  &:focus {
    outline: 0;
  }

  &:active {
    box-shadow: none;
    filter: brightness(1.2);
    text-shadow: 1px 1px 2px var(--middle-color);
    transform: translateY(2px);
  }
`
