package com.wh.mall.utils;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.FileInputStream;
import java.io.FileNotFoundException;

/**
 * Mybatis工具类
 * SqlSessionFactory是一个工厂基类，而一个工厂实例可以创建多个会话
 * 会话间互相隔离，为了避免重复创建工厂类实例与使用的便利性，创建工具类
 */
public class MybatisUtil {
    public static SqlSessionFactory session;

    /**
     * 静态单例模式，防止重复创建工厂方法
     */
    static {
        try {
            session = new SqlSessionFactoryBuilder().build(new FileInputStream("mybatis-config.xml"));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        }

    /**
     * 获取一个新的会话
     * @param autoCommit 是否开启自动提交（跟JDBC是一样的，如果不自动提交，则会变成事务操作）
     * @return SqlSession实现类实例
     */
    public static SqlSession getSession(boolean autoCommit) {
        return session.openSession(autoCommit);
    }
}
