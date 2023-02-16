import Container from './container'
import { Typography } from '@mui/material'
import useTranslation from '../intl/useTranslation'

const Footer = () => {
  const { t } = useTranslation()

  return (
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <Typography variant="h4">{t("sandras_portfolio")}</Typography>
          <br/>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
          </div>
          <br/>
          <div>
          <Typography variant="caption">© {new Date().getFullYear()} · Sandra Benito Junyent · {t("all_rights_reserved")} </Typography>
          </div>
        </div>
      </Container>
  )
}

export default Footer
