export interface Params {
    lang: string;
  }
  export type Props = {
    children: React.ReactNode
    params: { locale: string }
}