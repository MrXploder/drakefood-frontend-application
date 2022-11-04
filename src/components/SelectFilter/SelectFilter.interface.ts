export default interface IProps {
  value: string
  label: string
  options: IOption[]
  onSelectChange: (selection: IOption | undefined) => void
}

export interface IOption {
  value: string
  text: string
}
