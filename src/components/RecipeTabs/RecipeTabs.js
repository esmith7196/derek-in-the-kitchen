import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import "react-tabs/style/react-tabs.css"
import styled from "styled-components"

import Ingredient from "../Ingredient/Ingredient"
import { colors } from "../../style/constants"

const RecipeTabs = ({ data }) => {
  const renderIngredientsList = () =>
    data.ingredient.map(({ amount, ingredient, measurement }) => (
      <ul>
        <Ingredient data={{ amount, ingredient, measurement }} />
      </ul>
    ))

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return (
          <>
            <h2>Embedded Asset</h2>
            <pre>
              <code>{JSON.stringify(node, null, 2)}</code>
            </pre>
          </>
        )
      },
    },
  }

  return (
    <StyledTabs>
      <Tabs>
        <TabList>
          <Tab>Ingredients</Tab>
          <Tab>Instructions</Tab>
          <Tab>Story</Tab>
        </TabList>

        <TabPanel>{renderIngredientsList()}</TabPanel>
        <TabPanel>{renderRichText(data.steps)}</TabPanel>
        <TabPanel>
          <h2>Render Story here!</h2>
        </TabPanel>
      </Tabs>
    </StyledTabs>
  )
}

export default RecipeTabs

const StyledTabs = styled.div`
  .react-tabs__tab--selected {
    border: none;
    background: none;
    border-bottom: 2px solid ${colors.primary};
  }
  background: white;
  border-radius: 30px;
  padding: 0.25rem;
  .react-tabs__tab-list {
    border: none;
  }
`