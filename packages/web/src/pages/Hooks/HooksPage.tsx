import styled from 'styled-components';
import { Link } from 'react-router-dom';

const OuterHooks = styled.div``;

const HooksList = styled.ul``;

const HookItem = styled.li`
  font: normal normal normal 21px/24px TTNorms-Regular;
`;

const Hyperlink = styled(Link)``;

const Hooks = () => (
  <OuterHooks>
    <HooksList>
      <HookItem>
        <Hyperlink to="/useState">useState</Hyperlink>
      </HookItem>

      <HookItem>
        <Hyperlink to="/useEffect">useEffect</Hyperlink>
      </HookItem>

      <HookItem>
        <Hyperlink to="/useCallback">useCallback</Hyperlink>
      </HookItem>

      <HookItem>
        <Hyperlink to="/useMemo">useMemo</Hyperlink>
      </HookItem>

      <HookItem>
        <Hyperlink to="/customHooks">Custom Hooks</Hyperlink>
      </HookItem>
    </HooksList>

    <HooksList>
      <HookItem>
        <Hyperlink to="/useRef">useRef</Hyperlink>
      </HookItem>

      <HookItem>
        <Hyperlink to="/useReducer">useReducer</Hyperlink>
      </HookItem>

      <HookItem>
        <Hyperlink to="/useLayoutEffect">useLayoutEffect</Hyperlink>
      </HookItem>

      <HookItem>
        <Hyperlink to="/useDebugValue">useDebugValue</Hyperlink>
      </HookItem>

      <HookItem>
        <Hyperlink to="/useImperativeHandle">useImperativeHandle</Hyperlink>
      </HookItem>

      <HookItem>
        <Hyperlink to="/useContext">useContext</Hyperlink>
      </HookItem>
    </HooksList>
  </OuterHooks>
);

export default Hooks;
