import styled from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const BlockingLayer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .35);
  backdrop-filter: blur(1px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Modal = styled.div`
  height: 401px;
  width: 749px;
  box-sizing: border-box;
  border-radius: 12px;
  overflow: clip;
  background-color: #fff;
`;
export const ModalHeader = styled.header`
  height: 60px;
  background-color: #000;
  color: #fff;
  display: flex;
  padding: 0 18px 0 28px;
`;
export const ModalTitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  margin-right: auto;
`;
export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  font: var(--munito-font);
  font-size: 22px;
  font-weight: 200;
  color: #fff;
  cursor: pointer;
  transform: scaleX(1.2);
`;
export const ModalBody = styled.form`
  padding: 19px 16px 0 28px;
  color: #323232;
  height: 341px;
  box-sizing: border-box;

  & label {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
  }
`;
export const TaskText = styled.textarea`
  background-color: #f4f4f4;
  color: #6b6b6b;
  height: 148px;
  width: 705px;
  border-radius: 4px;
  border: none;
  padding: 12px 16px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 400;
  font: var(--munito-font);
  resize: none;
`;

export const PriorityBar = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

  & label {
    margin-bottom: 0;
  }
`;

const StyledTrigger = styled(DropdownMenu.Trigger)`
  border: none;
  width: 138px;
  height: 38px;
  border-radius: 4px;
  margin-left: 11px;
  padding-left: 11px;
  position: relative;
  outline: none;
  display: flex;
  align-items: center;
  background-color: #f4f4f4;

  & img {
    margin-right: 8px;
    margin-left: auto;
  }

  &[data-state = "open"] {
    background-color: #fff;
    
    & * {
      display: none;
    }
  }
`;

const StyledContent = styled(DropdownMenu.Content)`
  width: 138px;
  background-color: #fff;
  border-radius: 4px;
  overflow: clip;
  box-sizing: border-box;
  border: 1px solid #cecece;
  box-shadow: 0 0 4px rgba(0,0,0,.15);
  margin-top: 3px;
`;

const StyledItem = styled(DropdownMenu.Item)`
  height: 38px;
  padding-left: 11px;
  cursor: pointer;
  display: flex;
  align-items: center;
  outline: none;
  
  &:hover {
    background-color: #f4f4f4;
  }
`;

export const Dropdown = {
    Root: DropdownMenu.Root,
    Item: StyledItem,
    Trigger: StyledTrigger,
    Content: StyledContent,
    Arrow: DropdownMenu.Arrow,
}

export const Footer = styled.footer`
    height: 64px;
  margin: 25px -16px 0 -28px;
  padding: 17px;
  padding-bottom: 0;
  border-top: 1px solid #ebebeb;
  display: flex;
`;

export const FormBtn = styled.button`
  width: 128px;
  height: 32px;
  color: #fff;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  border: none;
  outline: none;
  background-color: #ddd;
  cursor: pointer;
`;

export const AddBtn = styled(FormBtn)`
  background-color: #000;
  margin-left: auto;
  
  &:disabled {
    opacity: .5;
  }
`;