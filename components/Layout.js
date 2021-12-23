import styled from 'styled-components'
import { motion } from 'framer-motion'
// import Head from './Head'

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

const Layout = ({ children }) => {
  return (
    <>
      <Main
        as={motion.main}
        variants={variants}
        initial={variants.hidden}
        animate={variants.enter}
        exit={variants.exit}
        transition={{ type: 'linear' }}
      >
        {children}
      </Main>
    </>
  )
}

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr min(var(--max-width), 100%) 1fr;
  & > * {
    grid-column: 2;
    padding: 0 18px;
    background: white;
  }
`

export const FullBleed = styled.div`
  grid-column: 1 / -1;
`

export const BottomRow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: var(--breathing-room);

  margin-top: 32px;
  @media (min-width: 480px) {
    margin-top: 64px;
  }
`

export default Layout
