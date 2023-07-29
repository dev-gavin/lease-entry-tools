import styled from 'styled-components'
import ClearButtonBase from '../../shared/ClearButton.styles'
import {
    ModuleContainer,
    ModuleTextInput,
    ModuleTitle,
} from '../../shared/Module/index.style'

export const Title = ModuleTitle
export const ClearButton = ClearButtonBase

export const EscalationDetectorWrapper = styled(ModuleContainer)`
    width: max-content;
`

export const Input = styled(ModuleTextInput)`
    text-align: right;
`
