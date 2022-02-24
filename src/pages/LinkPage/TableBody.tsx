import React, { FC, useState, useEffect } from "react";
import data from "components/data.json";
import printRemainTime from "utils/printRemainTime";
import Avatar from "components/Avatar";
import Default from "assets/icons/default.svg";
import * as S from "./index.style";
import printFilesize from "utils/printFileSize";

const TableBody: FC = () => {
  return (
    <S.TableBody>
      {data.map((item) => {
        return (
          <S.TableRow key={item.key}>
            <S.TableCell>
              <S.LinkInfo>
                <S.LinkImage>
                  <img referrerPolicy="no-referrer" src={Default} alt="" />
                </S.LinkImage>
                <S.LinkTexts>
                  <S.LinkTitle>{item.sent.subject}</S.LinkTitle>
                  <S.LinkUrl>localhost/{item.key}</S.LinkUrl>
                </S.LinkTexts>
              </S.LinkInfo>
              <span />
            </S.TableCell>
            <S.TableCell>
              <span>파일개수</span>
              <span>{item.count}</span>
            </S.TableCell>
            <S.TableCell>
              <span>파일사이즈</span>
              <span>{printFilesize(item.size)}</span>
            </S.TableCell>
            <S.TableCell>
              <span>유효기간</span>
              <span>{printRemainTime(item.expires_at)}</span>
            </S.TableCell>
            <S.TableCell>
              <span>받은사람</span>
              <S.LinkReceivers>
                <Avatar text="recruit@estmob.com" />
              </S.LinkReceivers>
            </S.TableCell>
          </S.TableRow>
        );
      })}
    </S.TableBody>
  );
};

export default TableBody;
