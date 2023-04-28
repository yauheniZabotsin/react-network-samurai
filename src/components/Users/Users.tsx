import React, { FC } from "react";
import styles from "./users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import { UserType } from "../../types/types";

type PropsType = {
  currentPage: number;
  totalUsersCount: number;
  pageSize: number;
  users: Array<UserType>;
  followingInProgress: Array<number>;

  onPageChanged: (pageNumber: number) => void;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
};

const Users: FC<PropsType> = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  users,
  ...props
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      {users.map((u) => (
        <User
          user={u}
          followingInProgress={props.followingInProgress}
          key={u.id}
          unfollow={props.unfollow}
          follow={props.follow}
        />
      ))}
    </div>
  );
};

export default Users;
