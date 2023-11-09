import * as S from "./styles";
import { SidebarProps } from "../../types";
import { Link } from "react-router-dom";
import { GoPersonFill } from "react-icons/go";
import { MdFormatListBulleted } from "react-icons/md";
import { BiLogoGithub } from "react-icons/bi";

export const Sidebar = ({ icon, title, description, path, selected }: SidebarProps) => {
  return(
    <S.Container selected={selected}>
      <Link to={path}>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Info>
        <S.Icon selected={selected}>
          {icon === 'profile' &&
            <GoPersonFill fill="white" width="24" height="24"/>
          }
          {icon === 'nivel' &&
            <MdFormatListBulleted fill="white" width="24" height="24"/>
          }
          {icon === 'redes' &&
            <BiLogoGithub fill="white" width="20" height="24"/>
          }
        
        </S.Icon>
      </Link>
    </S.Container>
  )
}