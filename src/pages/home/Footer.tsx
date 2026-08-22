import { Anchor, HStack, Text, VStack } from "@hope-ui/solid"
import { Link } from "@solidjs/router"
import { AnchorWithBase } from "~/components"
import { useT } from "~/hooks"
import { me } from "~/store"
import { UserMethods } from "~/types"

export const Footer = () => {
  const t = useT()
  return (
    <VStack class="footer" w="$full" py="$4">
      <HStack spacing="$1" alignItems="center">
        <Anchor href="https://github.com/tiouoo/openlistnext" external>
          {t("home.footer.powered_by")}
        </Anchor>
        <Text
          as="span"
          css={{
            display: "inline-flex",
            alignItems: "center",
            lineHeight: "1",
            fontSize: "inherit",
          }}
        >
          |
        </Text>
        <AnchorWithBase
          as={Link}
          href={UserMethods.is_guest(me()) ? "/login" : "/manage"}
        >
          {t(UserMethods.is_guest(me()) ? "login.login" : "home.footer.manage")}
        </AnchorWithBase>
      </HStack>
    </VStack>
  )
}
