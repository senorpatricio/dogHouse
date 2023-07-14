import React from "react";
import { StyledTable, THead, TBody, TFoot, TH, TR, TD } from "./styles";

type TableProps = {
    children: any
}

export const Table = ({ children, ...rest}: TableProps) => {
    console.log('breed!!!', children)
    return <StyledTable {...rest}>{children}</StyledTable>
}

Table.Head = ({ children, ...rest }: TableProps) => {
    return <THead {...rest}>{children}</THead>
}

Table.Body = ({ children, ...rest}: TableProps) => {
    return <TBody {...rest}>{children}</TBody>
}

Table.Foot = ({ children, ...rest}: TableProps) => {
    return <TFoot {...rest}>{children}</TFoot>
}

Table.TH = ({ children, ...rest}: TableProps) => {
    return <TH {...rest}>{children}</TH>
}

Table.TR = ({ children, ...rest}: TableProps) => {
    return <TR {...rest}>{children}</TR>
}

Table.TD = ({ children, ...rest}: TableProps) => {
    return <TD {...rest}>{children}</TD>
}
