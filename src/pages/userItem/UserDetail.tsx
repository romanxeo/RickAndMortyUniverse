import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {GET_CHARACTER_BY_ID} from "../../queries/userQueries";
import {Loader} from "../../modules/loader/Loader";
import {UserDetailItem} from "../../types/appTypes";

function UserDetail () {
  const {id} = useParams()

  const [userDetail, setUserDetail] = useState<UserDetailItem | null>(null)

  const { loading } = useQuery(GET_CHARACTER_BY_ID(+id), {
    onCompleted: (data) => {
      setUserDetail(data.character);
    }
  })

  const episodes = userDetail?.episode.map(item =>
    <div className="chip" key={item.id}>{item.name}</div>
  )

  return (
    <div className="page page-scroll">
      {loading || !userDetail
        ? <Loader />
        : <div className="UserItem__wrapper gap">
            <div className="UserItem__body gap">
            <img className="UserItem__avatar" src={userDetail.image} alt="avatar" />
            <div className="UserItem__infoBlock">
              <p><b>Name: </b>{userDetail.name}</p>
              <p><b>Species: </b>{userDetail.species}</p>
              <p><b>Status: </b>{userDetail.status}</p>
              <p><b>Gender: </b>{userDetail.gender}</p>
              <p><b>Type: </b>{userDetail.type}</p>
            </div>
          </div>
          <div className="chipContainer gap">
            <b>Episodes: </b>
            {episodes}
          </div>
        </div>
      }
    </div>
  )
}

export {UserDetail};
