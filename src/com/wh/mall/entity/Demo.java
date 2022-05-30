package com.wh.mall.entity;

import lombok.Data;
import lombok.experimental.Accessors;
import org.apache.ibatis.type.Alias;

@Data
// 以注解方式取别名
@Alias("lbwnb")
@Accessors(chain = true)
public class Demo {
    private String name;
    private int id;
}
